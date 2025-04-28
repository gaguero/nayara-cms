import { Campaign as PrismaCampaign } from '@prisma/client';

// This entity can be extended if needed, for now, it mirrors the Prisma model
export class Campaign implements PrismaCampaign {
  id: string;
  name: string;
  description: string | null;
  startDate: Date;
  endDate: Date | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdById: string;
} 