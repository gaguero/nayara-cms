import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../core/prisma.service';
import { CreateContentItemDto } from './dto/create-content-item.dto';
import { UpdateContentItemDto } from './dto/update-content-item.dto';
import { ContentItem, Prisma } from '@prisma/client'; // Import Prisma types

@Injectable()
export class ContentManagementService {
  constructor(private prisma: PrismaService) {}

  async create(
    campaignId: string,
    createContentItemDto: CreateContentItemDto,
  ): Promise<ContentItem> {
    // Verify campaign exists (optional, depends on if FK constraint is enough)
    // const campaign = await this.prisma.campaign.findUnique({ where: { id: campaignId } });
    // if (!campaign) {
    //   throw new NotFoundException(`Campaign with ID "${campaignId}" not found`);
    // }

    return this.prisma.contentItem.create({
      data: {
        ...createContentItemDto,
        campaignId: campaignId, // Link to the campaign
      },
    });
  }

  async findAll(campaignId: string): Promise<ContentItem[]> {
    // Add filtering/pagination later if needed
    return this.prisma.contentItem.findMany({
      where: {
        campaignId: campaignId,
      },
      orderBy: {
        createdAt: 'desc', // Default sort order
      },
    });
  }

  async findOne(campaignId: string, id: string): Promise<ContentItem | null> {
    const contentItem = await this.prisma.contentItem.findUnique({
      where: {
        id: id,
        campaignId: campaignId, // Ensure item belongs to the specified campaign
      },
    });

    if (!contentItem) {
      throw new NotFoundException(
        `ContentItem with ID "${id}" not found in campaign "${campaignId}"`, 
      );
    }
    return contentItem;
  }

  async update(
    campaignId: string,
    id: string,
    updateContentItemDto: UpdateContentItemDto,
  ): Promise<ContentItem> {
    // First, verify the item exists and belongs to the campaign
    const existingItem = await this.findOne(campaignId, id); 
    // findOne throws NotFoundException if not found/not matching campaign
    
    try {
      return await this.prisma.contentItem.update({
        where: { id: id }, 
        data: updateContentItemDto,
      });
    } catch (error) {
        // Handle potential Prisma errors during update if necessary
        // e.g., unique constraint violations
        throw error; // Re-throw for now
    }
  }

  async remove(campaignId: string, id: string): Promise<ContentItem> {
    // First, verify the item exists and belongs to the campaign
    const existingItem = await this.findOne(campaignId, id);
    // findOne throws NotFoundException if not found/not matching campaign

    try {
      return await this.prisma.contentItem.delete({
        where: { id: id },
      });
    } catch (error) {
        // Handle potential Prisma errors during delete if necessary
        throw error; // Re-throw for now
    }
  }
} 