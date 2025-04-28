import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlanningDocumentDto {
  @ApiProperty({ description: 'Name of the planning document', example: 'Marketing Plan Q3' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Optional description for the document', example: 'Draft plan for upcoming quarter', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  // file details (size, type) will be derived from the uploaded file itself
  // campaignId will come from the route parameter
} 