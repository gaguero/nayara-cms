import { ApiProperty } from '@nestjs/swagger';

export class PlanningDocumentResponseDto {
  @ApiProperty({ example: 'uuid-string-here' })
  id: string;

  @ApiProperty({ example: 'Marketing Plan Q3' })
  name: string;

  @ApiProperty({ example: 'Draft plan for upcoming quarter', nullable: true })
  description?: string | null;

  @ApiProperty({ example: '/uploads/unique-filename.pdf' }) // Example, actual URL depends on storage implementation
  fileUrl: string;

  @ApiProperty({ example: 1048576 })
  fileSize: number;

  @ApiProperty({ example: 'application/pdf' })
  fileType: string;

  @ApiProperty()
  uploadedAt: Date;

  @ApiProperty({ example: 'uuid-string-for-campaign' })
  campaignId: string;
} 