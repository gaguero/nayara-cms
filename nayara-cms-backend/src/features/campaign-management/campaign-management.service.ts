import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../core/prisma.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { Campaign } from './entities/campaign.entity'; // Or use PrismaCampaign
import { Prisma } from '@prisma/client';

@Injectable()
export class CampaignManagementService {
  constructor(private prisma: PrismaService) {}

  async create(
    createCampaignDto: CreateCampaignDto,
    userId: string,
  ): Promise<Campaign> {
    try {
      return await this.prisma.campaign.create({
        data: {
          ...createCampaignDto,
          createdById: userId,
        },
      });
    } catch (error) {
      // Add more specific error handling if needed (e.g., unique constraints)
      throw error;
    }
  }

  async findAll(): Promise<Campaign[]> {
    // Add pagination later if needed
    return this.prisma.campaign.findMany();
  }

  async findOne(id: string): Promise<Campaign> {
    const campaign = await this.prisma.campaign.findUnique({
      where: { id },
    });
    if (!campaign) {
      throw new NotFoundException(`Campaign with ID "${id}" not found`);
    }
    return campaign;
  }

  async update(
    id: string,
    updateCampaignDto: UpdateCampaignDto,
  ): Promise<Campaign> {
    try {
      return await this.prisma.campaign.update({
        where: { id },
        data: updateCampaignDto,
      });
    } catch (error) {
      // Check error code directly without instanceof
      if (error && typeof error === 'object' && 'code' in error && error.code === 'P2025') {
        throw new NotFoundException(`Campaign with ID "${id}" not found`);
      }
      throw error;
    }
  }

  async remove(id: string): Promise<Campaign> {
    try {
      return await this.prisma.campaign.delete({
        where: { id },
      });
    } catch (error) {
      // Check error code directly without instanceof
      if (error && typeof error === 'object' && 'code' in error && error.code === 'P2025') {
        throw new NotFoundException(`Campaign with ID "${id}" not found`);
      }
      throw error;
    }
  }
} 