import { useCampaign } from '../../hooks/useCampaign';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Assuming Shadcn UI path alias
import { Skeleton } from '@/components/ui/skeleton';

export function CampaignSelector() {
  const {
    availableCampaigns,
    activeCampaignId,
    setActiveCampaign,
    isLoadingCampaigns,
  } = useCampaign();

  const handleValueChange = (value: string) => {
    // The value from SelectItem is always a string, need to parse it
    const selectedId = parseInt(value, 10);
    if (!isNaN(selectedId)) {
      setActiveCampaign(selectedId);
    }
  };

  if (isLoadingCampaigns) {
    return <Skeleton className="h-10 w-[180px]" />; // Placeholder skeleton
  }

  if (!availableCampaigns || availableCampaigns.length === 0) {
    return (
      <div className="text-sm text-muted-foreground">No campaigns available</div>
    );
  }

  // Find the name of the currently active campaign
  const activeCampaignName = availableCampaigns.find(
    (c) => c.id === activeCampaignId,
  )?.name;

  return (
    <Select
      value={activeCampaignId?.toString() ?? ''}
      onValueChange={handleValueChange}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a campaign...">
          {activeCampaignName || 'Select a campaign...'} {/* Display name or placeholder */}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {availableCampaigns.map((campaign) => (
          <SelectItem key={campaign.id} value={campaign.id.toString()}>
            {campaign.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
} 