import { Module } from '@nestjs/common';
import { MediaLibraryService } from './media-library.service';
import { MediaLibraryController } from './media-library.controller';
import { PrismaService } from '../../core/prisma.service';
import { StorageModule } from '../storage/storage.module'; // Likely needed later

@Module({
  imports: [StorageModule], // Import StorageModule if MediaLibraryService depends on StorageService
  controllers: [MediaLibraryController], // Add MediaLibraryController
  providers: [MediaLibraryService, PrismaService], // Provide MediaLibraryService
})
export class MediaLibraryModule {} 