export class CampaignResponseDto {
  id: string;
  name: string;
  description?: string;
  startDate: Date;
  endDate?: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdById: string;
  // Add other fields or relations if needed for response
} 