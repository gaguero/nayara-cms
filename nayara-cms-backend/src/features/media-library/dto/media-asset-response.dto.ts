import { ApiProperty } from '@nestjs/swagger';

export class MediaAssetResponseDto {
  @ApiProperty({ example: 'uuid-string-for-media-asset' })
  id: string;

  @ApiProperty({ example: 'Campaign Launch Image.jpg' })
  name: string;

  @ApiProperty({ example: '/uploads/uuid-filename.jpg' }) // Example URL
  url: string;

  @ApiProperty({ example: 2097152 }) // e.g., 2MB
  fileSize: number;

  @ApiProperty({ example: 'image/jpeg' })
  mimeType: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty({ example: 'uuid-string-for-campaign' })
  campaignId: string;
} 