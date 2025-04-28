import { Module } from '@nestjs/common';
import { PlanningLibraryService } from './planning-library.service';
import { PlanningLibraryController } from './planning-library.controller';
import { PrismaService } from '../../core/prisma.service';
import { StorageModule } from '../storage/storage.module'; // Import StorageModule

@Module({
  imports: [StorageModule], // Import StorageModule to use StorageService
  controllers: [PlanningLibraryController],
  providers: [PlanningLibraryService, PrismaService],
})
export class PlanningLibraryModule {} 