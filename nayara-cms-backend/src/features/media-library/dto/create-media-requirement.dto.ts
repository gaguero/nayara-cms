import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsIn,
} from 'class-validator';

const validStatuses = ['pending', 'fulfilled', 'optional'];

export class CreateMediaRequirementDto {
  @ApiProperty({
    description: 'Title or name of the required media asset.',
    example: 'Hero Banner Image (1920x1080)',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Optional description or specifications for the requirement.',
    example: 'High-resolution image for the main website banner.',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Whether this media requirement is essential for the campaign.',
    example: true,
    default: true,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  required?: boolean;

  @ApiProperty({
    description: 'Initial status of the requirement.',
    example: 'pending',
    enum: validStatuses,
    default: 'pending',
    required: false,
  })
  @IsString()
  @IsOptional()
  @IsIn(validStatuses) // Ensure status is one of the allowed values
  status?: string;

  // campaignId will come from the route parameter
} 