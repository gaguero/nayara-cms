import { Injectable, NotFoundException, InternalServerErrorException, Logger } from '@nestjs/common';
import { PrismaService } from '../../core/prisma.service';
import { StorageService } from '../storage/storage.service';
import { CreatePlanningDocumentDto } from './dto/create-planning-document.dto';
// import { UpdatePlanningDocumentDto } from './dto/update-planning-document.dto'; // Not used yet
import { PlanningDocumentResponseDto } from './dto/planning-document-response.dto';
import { PlanningDocument, Prisma } from '@prisma/client';

// Define MulterFile type locally if @types/multer not globally recognized
// Or ensure @types/multer is installed and working
interface MulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  buffer: Buffer;
}

@Injectable()
export class PlanningLibraryService {
  private readonly logger = new Logger(PlanningLibraryService.name);

  constructor(
    private prisma: PrismaService,
    private storageService: StorageService,
  ) {}

  async createDocument(
    campaignId: string,
    file: MulterFile,
    createDto: CreatePlanningDocumentDto,
  ): Promise<PlanningDocumentResponseDto> {
    this.logger.log(`Creating document for campaign ${campaignId} with file ${file.originalname}`);
    
    // 1. Upload file using StorageService
    let uploadResult;
    try {
      uploadResult = await this.storageService.uploadFile(file);
      // TODO: Convert fileId/filePath from storage service to a public URL if needed
    } catch (uploadError) {
      this.logger.error('File upload failed during document creation', uploadError.stack);
      throw new InternalServerErrorException('Failed to upload document file.');
    }

    // 2. Create database record
    try {
      const newDocument = await this.prisma.planningDocument.create({
        data: {
          name: createDto.name,
          description: createDto.description,
          fileUrl: uploadResult.fileId, // Store fileId/URL from storage service
          fileSize: file.size,
          fileType: file.mimetype,
          campaignId: campaignId,
        },
      });
      this.logger.log(`Planning document record created with ID: ${newDocument.id}`);
      return this.mapToResponseDto(newDocument);
    } catch (dbError) {
      this.logger.error('Database record creation failed after file upload', dbError.stack);
      // Attempt to delete the orphaned uploaded file
      try {
        await this.storageService.deleteFile(uploadResult.fileId);
        this.logger.warn(`Orphaned file ${uploadResult.fileId} deleted after DB error.`);
      } catch (deleteError) {
        this.logger.error(`Failed to delete orphaned file ${uploadResult.fileId}`, deleteError.stack);
        // Log critical error: Orphaned file might remain
      }
      throw new InternalServerErrorException('Failed to create planning document record.');
    }
  }

  async getDocuments(campaignId: string): Promise<PlanningDocumentResponseDto[]> {
    this.logger.log(`Fetching documents for campaign ${campaignId}`);
    const documents = await this.prisma.planningDocument.findMany({
      where: { campaignId },
      orderBy: { uploadedAt: 'desc' },
    });
    return documents.map(this.mapToResponseDto);
  }

  async getDocumentById(campaignId: string, documentId: string): Promise<PlanningDocumentResponseDto> {
    this.logger.log(`Fetching document ${documentId} for campaign ${campaignId}`);
    const document = await this.prisma.planningDocument.findUnique({
      where: {
        id: documentId,
        campaignId: campaignId, // Ensure it belongs to the campaign
      },
    });

    if (!document) {
      throw new NotFoundException(
        `PlanningDocument with ID "${documentId}" not found in campaign "${campaignId}"`, 
      );
    }
    return this.mapToResponseDto(document);
  }

  async deleteDocument(campaignId: string, documentId: string): Promise<void> {
    this.logger.log(`Attempting to delete document ${documentId} from campaign ${campaignId}`);
    // 1. Verify document exists and belongs to campaign
    const document = await this.getDocumentById(campaignId, documentId); // Throws NotFound if not found

    // 2. Delete database record first (or use transaction)
    try {
      await this.prisma.planningDocument.delete({
        where: { id: documentId },
      });
      this.logger.log(`Deleted database record for document ${documentId}`);
    } catch (dbError) {
      this.logger.error(`Failed to delete DB record for document ${documentId}`, dbError.stack);
      throw new InternalServerErrorException('Failed to delete planning document record.');
    }

    // 3. Delete file from storage
    try {
      await this.storageService.deleteFile(document.fileUrl); // Assuming fileUrl is the fileId
      this.logger.log(`Deleted file ${document.fileUrl} from storage`);
    } catch (storageError) {
      // Log critical error: DB record deleted but file remains
      this.logger.error(
        `Failed to delete file ${document.fileUrl} after deleting DB record ${documentId}. Orphaned file may exist.`, 
        storageError.stack
      );
      // Potentially throw a specific error or handle cleanup differently
    }
  }

  // Helper to map Prisma model to Response DTO
  private mapToResponseDto(doc: PlanningDocument): PlanningDocumentResponseDto {
    return {
      id: doc.id,
      name: doc.name,
      description: doc.description,
      fileUrl: doc.fileUrl, // TODO: Convert fileId to actual URL if needed
      fileSize: doc.fileSize,
      fileType: doc.fileType,
      uploadedAt: doc.uploadedAt,
      campaignId: doc.campaignId,
    };
  }
} 