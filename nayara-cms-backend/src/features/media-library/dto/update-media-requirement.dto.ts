import { PartialType } from '@nestjs/swagger';
import { CreateMediaRequirementDto } from './create-media-requirement.dto';

// Use PartialType to make all fields from Create DTO optional for updates
export class UpdateMediaRequirementDto extends PartialType(
  CreateMediaRequirementDto,
) {} 