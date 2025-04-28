import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseUUIDPipe,
  Req, // For accessing request to get user ID
} from '@nestjs/common';
import { CampaignManagementService } from './campaign-management.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard'; // Adjust path if needed
// import { RolesGuard } from '../../common/guards/roles.guard'; // Placeholder
// import { Roles } from '../../common/decorators/roles.decorator'; // Placeholder
import { CurrentUser } from '../../auth/decorators/current-user.decorator'; // Adjust path if needed
// Import CampaignResponseDto if needed for return types

@Controller('campaigns') // Base path: /api/v1/campaigns (assuming global prefix)
// @UseGuards(JwtAuthGuard, RolesGuard) // Apply guards globally to controller
// @Roles('superadmin') // Apply role restriction globally
@UseGuards(JwtAuthGuard) // Apply basic JWT guard for now
export class CampaignManagementController {
  constructor(private readonly campaignService: CampaignManagementService) {}

  @Post()
  create(
    @Body() createCampaignDto: CreateCampaignDto,
    @CurrentUser() user: any, // Use CurrentUser decorator
  ) {
    // Assuming user object from JWT payload has an id field (e.g., user.userId)
    const userId = user.userId || user.sub; // Adjust based on actual payload structure
    if (!userId) {
        // Handle case where user ID is not available (should not happen with JwtAuthGuard)
        throw new Error('User ID not found in JWT payload');
    }
    return this.campaignService.create(createCampaignDto, userId);
  }

  @Get()
  findAll() {
    // Add query params for pagination later
    return this.campaignService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.campaignService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCampaignDto: UpdateCampaignDto,
  ) {
    return this.campaignService.update(id, updateCampaignDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.campaignService.remove(id);
  }
} 