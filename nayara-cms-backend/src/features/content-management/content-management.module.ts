import { Module } from '@nestjs/common';
import { ContentManagementService } from './content-management.service';
import { ContentManagementController } from './content-management.controller';
import { PrismaService } from '../../core/prisma.service'; // Import PrismaService directly

@Module({
  imports: [], // Remove PrismaModule import
  controllers: [ContentManagementController],
  providers: [ContentManagementService, PrismaService], // Add PrismaService to providers
})
export class ContentManagementModule {} 