import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanningDocumentDto } from './create-planning-document.dto';

// For now, only allow updating name and description. File replacement would be a different operation.
export class UpdatePlanningDocumentDto extends PartialType(CreatePlanningDocumentDto) {} 