import {
  Controller,
  Get,
  Post,
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
  MaxFileSizeValidator,
  FileTypeValidator,
} from '@nestjs/common';
import { PlanningLibraryService } from './planning-library.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { CreatePlanningDocumentDto } from './dto/create-planning-document.dto';
import { PlanningDocumentResponseDto } from './dto/planning-document-response.dto';
import { Express } from 'express'; // Import Express namespace

@ApiTags('Planning Library')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('campaigns/:campaignId/planning-documents')
export class PlanningLibraryController {
  constructor(private readonly planningLibraryService: PlanningLibraryService) {}

  @Get()
  @ApiOperation({ summary: 'List all planning documents for a campaign' })
  @ApiResponse({
    status: 200,
    description: 'List of planning documents retrieved successfully.',
    type: [PlanningDocumentResponseDto],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiParam({ name: 'campaignId', description: 'UUID of the campaign', type: String })
  async findAll(
      @Param('campaignId', ParseUUIDPipe) campaignId: string
  ): Promise<PlanningDocumentResponseDto[]> {
    return this.planningLibraryService.getDocuments(campaignId);
  }

  @Post()
  @UseInterceptors(FileInterceptor('file')) // 'file' matches the key in the form data
  @ApiOperation({ summary: 'Upload a planning document for a campaign' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Multipart form data including the file and its metadata.',
    type: CreatePlanningDocumentDto, // Reference DTO for metadata part
    // Explicitly describe the multipart structure:
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary', description: 'The document file to upload.' },
        name: { type: 'string', description: 'Name for the document.' },
        description: { type: 'string', nullable: true, description: 'Optional description.' },
      },
      required: ['file', 'name'], 
    },
  })
  @ApiResponse({ status: 201, description: 'Document uploaded successfully.', type: PlanningDocumentResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid input or file type/size issue.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async create(
    @Param('campaignId', ParseUUIDPipe) campaignId: string,
    // Apply validation pipes to the uploaded file
    @UploadedFile(
        new ParseFilePipe({
            validators: [
                // Example: Limit file size to 10MB
                new MaxFileSizeValidator({ maxSize: 10 * 1024 * 1024 }), 
                // Example: Allow only specific file types (adjust as needed)
                // new FileTypeValidator({ fileType: 'application/pdf|image/jpeg|image/png' }), 
            ],
            // Make file optional if necessary, otherwise pipe fails if no file
            // fileIsRequired: true, 
        }),
    ) file: Express.Multer.File, // Correct type hint
    // Use the DTO for the rest of the form data
    @Body() createDto: CreatePlanningDocumentDto, 
  ): Promise<PlanningDocumentResponseDto> {
    return this.planningLibraryService.createDocument(campaignId, file, createDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific planning document by ID' })
  @ApiResponse({ status: 200, description: 'Document retrieved successfully.', type: PlanningDocumentResponseDto })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Document or campaign not found.' })
  @ApiParam({ name: 'campaignId', description: 'UUID of the campaign', type: String })
  @ApiParam({ name: 'id', description: 'UUID of the planning document', type: String })
  async findOne(
      @Param('campaignId', ParseUUIDPipe) campaignId: string,
      @Param('id', ParseUUIDPipe) id: string
  ): Promise<PlanningDocumentResponseDto> {
    return this.planningLibraryService.getDocumentById(campaignId, id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a specific planning document by ID' })
  @ApiResponse({ status: 204, description: 'Document deleted successfully.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Document or campaign not found.' })
  @ApiParam({ name: 'campaignId', description: 'UUID of the campaign', type: String })
  @ApiParam({ name: 'id', description: 'UUID of the planning document', type: String })
  async remove(
      @Param('campaignId', ParseUUIDPipe) campaignId: string,
      @Param('id', ParseUUIDPipe) id: string
  ): Promise<void> {
    await this.planningLibraryService.deleteDocument(campaignId, id);
  }
} 