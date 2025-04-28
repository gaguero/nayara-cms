import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Body,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
  ParseFilePipe,
  MaxFileSizeValidator, // Example validator
  // FileTypeValidator, // Example validator - adjust as needed
} from '@nestjs/common';
import { MediaLibraryService } from './media-library.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiConsumes,
  ApiBody,
} from '@nestjs/swagger';
import { CreateMediaAssetDto } from './dto/create-media-asset.dto';
import { MediaAssetResponseDto } from './dto/media-asset-response.dto';
import { CreateMediaRequirementDto } from './dto/create-media-requirement.dto';
import { UpdateMediaRequirementDto } from './dto/update-media-requirement.dto';
import { MediaRequirementResponseDto } from './dto/media-requirement-response.dto';
import { Express } from 'express'; // Import Express namespace

@ApiTags('Media Library') // Group endpoints under 'Media Library'
@ApiBearerAuth() // Indicate endpoints require JWT Bearer token
@UseGuards(JwtAuthGuard) // Apply JWT authentication guard to all endpoints
@Controller('campaigns/:campaignId') // Adjust base controller route
export class MediaLibraryController {
  constructor(private readonly mediaLibraryService: MediaLibraryService) {}

  // --- Media Asset Endpoints --- //

  @Get('media-assets')
  @ApiOperation({ summary: 'List all media assets for a campaign' })
  @ApiResponse({
    status: 200,
    description: 'List of media assets retrieved successfully.',
    type: [MediaAssetResponseDto],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Campaign not found.' })
  @ApiParam({
    name: 'campaignId',
    description: 'UUID of the campaign',
    type: String,
  })
  async findAllAssets(
    @Param('campaignId', ParseUUIDPipe)
    campaignId: string,
  ): Promise<MediaAssetResponseDto[]> {
    return this.mediaLibraryService.getMediaAssets(campaignId);
  }

  @Post('media-assets')
  @UseInterceptors(FileInterceptor('file')) // Handle single file upload with field name 'file'
  @ApiOperation({ summary: 'Upload a media asset for a campaign' })
  @ApiConsumes('multipart/form-data') // Specify content type for file upload
  @ApiBody({
    description:
      'Multipart form data including the media file and optional metadata.',
    type: CreateMediaAssetDto, // DTO for the metadata part
    schema: {
      // Explicit schema definition for Swagger UI
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
          description: 'The media file to upload.',
        },
        name: {
          type: 'string',
          description: 'Optional name for the media asset.',
          nullable: true,
        },
        description: { 
            type: 'string',
            description: 'Optional description.',
            nullable: true 
        },
      },
      required: ['file'], // Only the file is strictly required in the form-data
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Media asset uploaded successfully.',
    type: MediaAssetResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input or file type/size issue.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiParam({
    name: 'campaignId',
    description: 'UUID of the campaign',
    type: String,
  })
  async uploadAsset(
    @Param('campaignId', ParseUUIDPipe)
    campaignId: string,
    // Apply validation pipes to the uploaded file
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          // Example: Limit file size to 50MB (adjust as needed)
          new MaxFileSizeValidator({ maxSize: 50 * 1024 * 1024 }),
          // Example: Allow specific image/video types (adjust MIME types)
          // new FileTypeValidator({ fileType: 'image/jpeg|image/png|video/mp4' }),
        ],
        fileIsRequired: true, // Ensure a file is present
      }),
    )
    file: Express.Multer.File, // Use correct type hint for Multer file
    // Use the DTO for the rest of the form data (name, description)
    @Body()
    createDto: CreateMediaAssetDto,
  ): Promise<MediaAssetResponseDto> {
    // The service method handles storing the file and creating the DB record
    return this.mediaLibraryService.uploadMediaAsset(
      campaignId,
      file,
      createDto,
    );
  }

  @Delete('media-assets/:assetId')
  @HttpCode(HttpStatus.NO_CONTENT) // Return 204 No Content on successful deletion
  @ApiOperation({ summary: 'Delete a specific media asset by ID' })
  @ApiResponse({ status: 204, description: 'Media asset deleted successfully.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Media asset or campaign not found.' })
  @ApiParam({
    name: 'campaignId',
    description: 'UUID of the campaign',
    type: String,
  })
  @ApiParam({
    name: 'assetId',
    description: 'UUID of the media asset to delete',
    type: String,
  })
  async removeAsset(
    @Param('campaignId', ParseUUIDPipe)
    campaignId: string,
    @Param('assetId', ParseUUIDPipe)
    assetId: string,
  ): Promise<void> {
    await this.mediaLibraryService.deleteMediaAsset(campaignId, assetId);
  }

  // --- Media Requirement Endpoints --- //

  @Get('media-requirements')
  @ApiOperation({ summary: 'List all media requirements for a campaign' })
  @ApiResponse({
    status: 200,
    description: 'List of media requirements retrieved successfully.',
    type: [MediaRequirementResponseDto],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Campaign not found.' })
  @ApiParam({ name: 'campaignId', description: 'UUID of the campaign' })
  async findAllRequirements(
    @Param('campaignId', ParseUUIDPipe)
    campaignId: string,
  ): Promise<MediaRequirementResponseDto[]> {
    return this.mediaLibraryService.getMediaRequirements(campaignId);
  }

  @Post('media-requirements')
  @ApiOperation({ summary: 'Create a new media requirement for a campaign' })
  @ApiBody({ type: CreateMediaRequirementDto })
  @ApiResponse({
    status: 201,
    description: 'Media requirement created successfully.',
    type: MediaRequirementResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiParam({ name: 'campaignId', description: 'UUID of the campaign' })
  async createRequirement(
    @Param('campaignId', ParseUUIDPipe)
    campaignId: string,
    @Body()
    createDto: CreateMediaRequirementDto,
  ): Promise<MediaRequirementResponseDto> {
    return this.mediaLibraryService.createMediaRequirement(campaignId, createDto);
  }

  @Patch('media-requirements/:requirementId')
  @ApiOperation({ summary: 'Update an existing media requirement' })
  @ApiBody({ type: UpdateMediaRequirementDto })
  @ApiResponse({
    status: 200,
    description: 'Media requirement updated successfully.',
    type: MediaRequirementResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Requirement or campaign not found.' })
  @ApiParam({ name: 'campaignId', description: 'UUID of the campaign' })
  @ApiParam({ name: 'requirementId', description: 'UUID of the requirement to update' })
  async updateRequirement(
    @Param('campaignId', ParseUUIDPipe)
    campaignId: string,
    @Param('requirementId', ParseUUIDPipe)
    requirementId: string,
    @Body()
    updateDto: UpdateMediaRequirementDto,
  ): Promise<MediaRequirementResponseDto> {
    return this.mediaLibraryService.updateMediaRequirement(
      campaignId,
      requirementId,
      updateDto,
    );
  }

  @Delete('media-requirements/:requirementId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a specific media requirement by ID' })
  @ApiResponse({ status: 204, description: 'Requirement deleted successfully.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Requirement or campaign not found.' })
  @ApiParam({ name: 'campaignId', description: 'UUID of the campaign' })
  @ApiParam({ name: 'requirementId', description: 'UUID of the requirement to delete' })
  async removeRequirement(
    @Param('campaignId', ParseUUIDPipe)
    campaignId: string,
    @Param('requirementId', ParseUUIDPipe)
    requirementId: string,
  ): Promise<void> {
    await this.mediaLibraryService.deleteMediaRequirement(
      campaignId,
      requirementId,
    );
  }
} 