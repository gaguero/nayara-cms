import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

// DTO for the metadata part of the media asset upload
export class CreateMediaAssetDto {
  @ApiProperty({
    description: 'User-provided name for the media asset. Defaults to filename if not provided.',
    example: 'Campaign Launch Image',
    required: false,
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'Optional description for the media asset.',
    example: 'Main visual for the Q3 campaign launch.',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  // Note: File itself (buffer, size, mimetype) comes from @UploadedFile()
  // campaignId will come from the route parameter
} 