import { Module } from '@nestjs/common';
import { CampaignManagementService } from './campaign-management.service';
import { CampaignManagementController } from './campaign-management.controller';
import { PrismaService } from '../../core/prisma.service'; // Import PrismaService
import { AuthModule } from '../../auth/auth.module'; // Import AuthModule for guards

@Module({
  imports: [AuthModule], // Import AuthModule to make guards available
  controllers: [CampaignManagementController], // Add Controller
  providers: [CampaignManagementService, PrismaService], // Add Service & PrismaService
})
export class CampaignManagementModule {} 