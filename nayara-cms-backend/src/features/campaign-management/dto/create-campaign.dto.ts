import { IsString, IsNotEmpty, IsOptional, IsDateString, IsBoolean } from 'class-validator';

export class CreateCampaignDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  @IsNotEmpty()
  startDate: string; // Or Date, depends on transform usage

  @IsDateString()
  @IsOptional()
  endDate?: string; // Or Date

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  // createdById will be added by the service based on the logged-in user
} 