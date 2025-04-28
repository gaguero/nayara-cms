import { IsString, IsNotEmpty, IsOptional, IsUrl, IsIn } from 'class-validator';

// Define allowed content types and statuses
const ALLOWED_CONTENT_TYPES = ['article', 'image', 'video', 'post'];
const ALLOWED_STATUSES = ['draft', 'published', 'archived'];

export class CreateContentItemDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  body: string; // Consider allowing optional based on contentType

  @IsString()
  @IsNotEmpty()
  @IsIn(ALLOWED_CONTENT_TYPES)
  contentType: string;

  @IsUrl()
  @IsOptional()
  mediaUrl?: string;

  @IsString()
  @IsOptional()
  @IsIn(ALLOWED_STATUSES)
  status?: string; // Defaults to 'draft' in schema

  // campaignId will be taken from the route parameter
} 