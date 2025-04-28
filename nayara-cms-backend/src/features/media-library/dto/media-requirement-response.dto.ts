import { ApiProperty } from '@nestjs/swagger';

export class MediaRequirementResponseDto {
  @ApiProperty({ example: 'uuid-string-for-requirement' })
  id: string;

  @ApiProperty({ example: 'Hero Banner Image (1920x1080)' })
  title: string;

  @ApiProperty({
    example: 'High-resolution image for the main website banner.',
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({ example: true })
  required: boolean;

  @ApiProperty({ example: 'pending' })
  status: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ example: 'uuid-string-for-campaign' })
  campaignId: string;
} 