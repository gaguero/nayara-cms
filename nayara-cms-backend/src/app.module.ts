import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RateLimiterModule } from 'nestjs-rate-limiter';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './core/logging/winston.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './core/prisma.service';
import { AuthModule } from './auth/auth.module';
import { HealthModule } from './features/health/health.module';
import { CampaignManagementModule } from './features/campaign-management/campaign-management.module';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { ContentManagementModule } from './features/content-management/content-management.module';
import { StorageModule } from './features/storage/storage.module';
import { MediaLibraryModule } from './features/media-library/media-library.module';
import { PlanningLibraryModule } from './features/planning-library/planning-library.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    WinstonModule.forRoot(winstonConfig),
    RateLimiterModule,
    HealthModule,
    AuthModule, 
    CampaignManagementModule, 
    DashboardModule, 
    ContentManagementModule,
    StorageModule,
    MediaLibraryModule,
    PlanningLibraryModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
