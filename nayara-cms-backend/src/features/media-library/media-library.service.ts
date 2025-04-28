import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../../core/prisma.service';
import { StorageService } from '../storage/storage.service';
import { CreateMediaAssetDto } from './dto/create-media-asset.dto';
import { MediaAssetResponseDto } from './dto/media-asset-response.dto';
import { CreateMediaRequirementDto } from './dto/create-media-requirement.dto';
import { UpdateMediaRequirementDto } from './dto/update-media-requirement.dto';
import { MediaRequirementResponseDto } from './dto/media-requirement-response.dto';
// Import Prisma types correctly from the generated client
import { MediaAsset, MediaRequirement, Prisma } from '../../../generated/prisma';

// Define MulterFile type locally if needed
interface MulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  buffer: Buffer;
}

@Injectable()
export class MediaLibraryService {
  private readonly logger = new Logger(MediaLibraryService.name);

  constructor(
    private prisma: PrismaService,
    private storageService: StorageService,
  ) {}

  // --- Media Asset Methods --- //

  async getMediaAssets(
    campaignId: string,
  ): Promise<MediaAssetResponseDto[]> {
    this.logger.log(`Fetching media assets for campaign ${campaignId}`);
    const assets = await this.prisma.mediaAsset.findMany({
      where: { campaignId },
      orderBy: { createdAt: 'desc' },
    });
    return assets.map(this.mapMediaAssetToResponseDto);
  }

  async uploadMediaAsset(
    campaignId: string,
    file: MulterFile,
    createDto: CreateMediaAssetDto,
  ): Promise<MediaAssetResponseDto> {
    this.logger.log(
      `Uploading media asset for campaign ${campaignId}: ${file.originalname}`,
    );

    // 1. Upload file using StorageService
    let uploadResult;
    try {
      uploadResult = await this.storageService.uploadFile(file);
    } catch (uploadError) {
      this.logger.error(
        'File upload failed during media asset creation',
        uploadError.stack,
      );
      throw new InternalServerErrorException('Failed to upload media file.');
    }

    // 2. Create database record
    try {
      const newAsset = await this.prisma.mediaAsset.create({
        data: {
          name: createDto.name || file.originalname,
          url: uploadResult.fileId, // Store fileId (or future URL)
          fileSize: file.size,
          mimeType: file.mimetype,
          campaignId: campaignId,
        },
      });
      this.logger.log(`Media asset record created with ID: ${newAsset.id}`);
      return this.mapMediaAssetToResponseDto(newAsset);
    } catch (dbError) {
      this.logger.error(
        'Database record creation failed after file upload',
        dbError.stack,
      );
      // Attempt to delete the orphaned uploaded file
      try {
        await this.storageService.deleteFile(uploadResult.fileId);
        this.logger.warn(
          `Orphaned file ${uploadResult.fileId} deleted after DB error.`,
        );
      } catch (deleteError) {
        this.logger.error(
          `CRITICAL: Failed to delete orphaned file ${uploadResult.fileId}`,
          deleteError.stack,
        );
      }
      throw new InternalServerErrorException('Failed to create media asset record.');
    }
  }

  async deleteMediaAsset(campaignId: string, assetId: string): Promise<void> {
    this.logger.log(
      `Attempting to delete media asset ${assetId} from campaign ${campaignId}`,
    );

    // 1. Find the asset to get the file URL/ID and verify ownership
    const asset = await this.prisma.mediaAsset.findUnique({
      where: {
        id: assetId,
        campaignId: campaignId,
      },
    });

    if (!asset) {
      throw new NotFoundException(
        `MediaAsset with ID "${assetId}" not found in campaign "${campaignId}"`,
      );
    }

    // 2. Delete database record first
    try {
      await this.prisma.mediaAsset.delete({
        where: { id: assetId },
      });
      this.logger.log(`Deleted database record for media asset ${assetId}`);
    } catch (dbError) {
      this.logger.error(
        `Failed to delete DB record for media asset ${assetId}`,
        dbError.stack,
      );
      throw new InternalServerErrorException('Failed to delete media asset record.');
    }

    // 3. Delete the actual file from storage
    try {
      await this.storageService.deleteFile(asset.url); // Assuming asset.url stores the fileId
      this.logger.log(`Deleted file ${asset.url} from storage`);
    } catch (storageError) {
      this.logger.error(
        `CRITICAL: Failed to delete file ${asset.url} after deleting DB record ${assetId}. Orphaned file may exist.`,
        storageError.stack,
      );
    }
  }

  // Helper to map Prisma MediaAsset model to Response DTO
  private mapMediaAssetToResponseDto(
    asset: MediaAsset,
  ): MediaAssetResponseDto {
    return {
      id: asset.id,
      name: asset.name,
      url: asset.url, // TODO: Convert fileId to actual URL if needed
      fileSize: asset.fileSize,
      mimeType: asset.mimeType,
      createdAt: asset.createdAt,
      campaignId: asset.campaignId,
    };
  }

  // --- Media Requirement Methods --- //

  async getMediaRequirements(
    campaignId: string,
  ): Promise<MediaRequirementResponseDto[]> {
    this.logger.log(`Fetching media requirements for campaign ${campaignId}`);
    const requirements = await this.prisma.mediaRequirement.findMany({
      where: { campaignId },
      orderBy: { createdAt: 'desc' },
    });
    return requirements.map(this.mapMediaRequirementToResponseDto);
  }

  async createMediaRequirement(
    campaignId: string,
    createDto: CreateMediaRequirementDto,
  ): Promise<MediaRequirementResponseDto> {
    this.logger.log(
      `Creating media requirement titled "${createDto.title}" for campaign ${campaignId}`,
    );
    try {
      const newRequirement = await this.prisma.mediaRequirement.create({
        data: {
          ...createDto,
          campaignId: campaignId,
        },
      });
      this.logger.log(
        `Media requirement record created with ID: ${newRequirement.id}`,
      );
      return this.mapMediaRequirementToResponseDto(newRequirement);
    } catch (error) {
      this.logger.error(
        `Failed to create media requirement for campaign ${campaignId}`,
        error.stack,
      );
      // Handle potential Prisma errors (e.g., unique constraint)
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Add specific error handling if needed
      }
      throw new InternalServerErrorException('Failed to create media requirement.');
    }
  }

  async updateMediaRequirement(
    campaignId: string,
    requirementId: string,
    updateDto: UpdateMediaRequirementDto,
  ): Promise<MediaRequirementResponseDto> {
    this.logger.log(
      `Updating media requirement ${requirementId} for campaign ${campaignId}`,
    );
    // First, verify the requirement exists and belongs to the campaign
    const existingRequirement = await this.prisma.mediaRequirement.findUnique({
      where: { id: requirementId, campaignId: campaignId },
    });
    if (!existingRequirement) {
      throw new NotFoundException(
        `MediaRequirement with ID "${requirementId}" not found in campaign "${campaignId}"`,
      );
    }

    try {
      const updatedRequirement = await this.prisma.mediaRequirement.update({
        where: { id: requirementId },
        data: updateDto,
      });
      this.logger.log(
        `Media requirement ${requirementId} updated successfully.`,
      );
      return this.mapMediaRequirementToResponseDto(updatedRequirement);
    } catch (error) {
      this.logger.error(
        `Failed to update media requirement ${requirementId}`,
        error.stack,
      );
      throw new InternalServerErrorException('Failed to update media requirement.');
    }
  }

  async deleteMediaRequirement(
    campaignId: string,
    requirementId: string,
  ): Promise<void> {
    this.logger.log(
      `Attempting to delete media requirement ${requirementId} from campaign ${campaignId}`,
    );
    // Verify existence and ownership first
    const requirement = await this.prisma.mediaRequirement.findUnique({
      where: {
        id: requirementId,
        campaignId: campaignId,
      },
    });

    if (!requirement) {
      throw new NotFoundException(
        `MediaRequirement with ID "${requirementId}" not found in campaign "${campaignId}"`,
      );
    }

    try {
      await this.prisma.mediaRequirement.delete({
        where: { id: requirementId },
      });
      this.logger.log(
        `Deleted media requirement ${requirementId} successfully.`,
      );
    } catch (error) {
      this.logger.error(
        `Failed to delete media requirement ${requirementId}`,
        error.stack,
      );
      throw new InternalServerErrorException('Failed to delete media requirement.');
    }
  }

  // Helper to map Prisma MediaRequirement model to Response DTO
  private mapMediaRequirementToResponseDto(
    req: MediaRequirement,
  ): MediaRequirementResponseDto {
    return {
      id: req.id,
      title: req.title,
      description: req.description,
      required: req.required,
      status: req.status,
      createdAt: req.createdAt,
      updatedAt: req.updatedAt,
      campaignId: req.campaignId,
    };
  }
}
