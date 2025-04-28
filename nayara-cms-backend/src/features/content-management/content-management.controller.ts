import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ContentManagementService } from './content-management.service';
import { CreateContentItemDto } from './dto/create-content-item.dto';
import { UpdateContentItemDto } from './dto/update-content-item.dto';
import { ContentItemResponseDto } from './dto/content-item-response.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiTags('Content Management')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('campaigns/:campaignId/content')
export class ContentManagementController {
  constructor(private readonly contentManagementService: ContentManagementService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new content item for a campaign' })
  @ApiResponse({
    status: 201,
    description: 'The content item has been successfully created.',
    type: ContentItemResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Campaign not found.' })
  @ApiParam({ name: 'campaignId', description: 'UUID of the campaign', type: String })
  async create(
    @Param('campaignId', ParseUUIDPipe) campaignId: string,
    @Body() createContentItemDto: CreateContentItemDto,
  ): Promise<ContentItemResponseDto> {
    return this.contentManagementService.create(campaignId, createContentItemDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all content items for a campaign' })
  @ApiResponse({
    status: 200,
    description: 'List of content items retrieved successfully.',
    type: [ContentItemResponseDto],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Campaign not found.' })
  @ApiParam({ name: 'campaignId', description: 'UUID of the campaign', type: String })
  async findAll(
    @Param('campaignId', ParseUUIDPipe) campaignId: string,
  ): Promise<ContentItemResponseDto[]> {
    return this.contentManagementService.findAll(campaignId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific content item by ID' })
  @ApiResponse({
    status: 200,
    description: 'Content item retrieved successfully.',
    type: ContentItemResponseDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Content item or campaign not found.' })
  @ApiParam({ name: 'campaignId', description: 'UUID of the campaign', type: String })
  @ApiParam({ name: 'id', description: 'UUID of the content item', type: String })
  async findOne(
    @Param('campaignId', ParseUUIDPipe) campaignId: string,
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ContentItemResponseDto> {
    return this.contentManagementService.findOne(campaignId, id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a specific content item by ID' })
  @ApiResponse({
    status: 200,
    description: 'Content item updated successfully.',
    type: ContentItemResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Content item or campaign not found.' })
  @ApiParam({ name: 'campaignId', description: 'UUID of the campaign', type: String })
  @ApiParam({ name: 'id', description: 'UUID of the content item', type: String })
  async update(
    @Param('campaignId', ParseUUIDPipe) campaignId: string,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateContentItemDto: UpdateContentItemDto,
  ): Promise<ContentItemResponseDto> {
    return this.contentManagementService.update(campaignId, id, updateContentItemDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a specific content item by ID' })
  @ApiResponse({ status: 204, description: 'Content item deleted successfully.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Content item or campaign not found.' })
  @ApiParam({ name: 'campaignId', description: 'UUID of the campaign', type: String })
  @ApiParam({ name: 'id', description: 'UUID of the content item', type: String })
  async remove(
    @Param('campaignId', ParseUUIDPipe) campaignId: string,
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<void> {
    await this.contentManagementService.remove(campaignId, id);
  }
} 