import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api'; // Assuming apiClient is setup here
import { useCampaign } from '@/providers/CampaignProvider'; // Hook to get active campaign

// Define the expected shape of a content item summary
// TODO: Ensure this matches the backend ContentItemResponseDto (or similar)
export interface ContentItemSummary {
  id: string;
  title: string;
  contentType: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  campaignId: string;
}

// API function to fetch content items for a specific campaign
const fetchContentItems = async (
  campaignId: string,
): Promise<ContentItemSummary[]> => {
  const { data } = await apiClient.get<ContentItemSummary[]>(
    `/campaigns/${campaignId}/content`,
  );
  return data;
};

// Query key factory for content items
export const contentQueryKeys = {
  all: (campaignId: string) => ['campaigns', campaignId, 'content'] as const,
  lists: (campaignId: string) => [...contentQueryKeys.all(campaignId), 'list'] as const,
  list: (campaignId: string, filters: Record<string, any> = {}) => [...contentQueryKeys.lists(campaignId), filters] as const,
  details: (campaignId: string) => [...contentQueryKeys.all(campaignId), 'detail'] as const,
  detail: (campaignId: string, id: string) => [...contentQueryKeys.details(campaignId), id] as const,
};

/**
 * Hook to fetch a list of content items for the active campaign.
 */
export const useContentItems = () => {
  const { activeCampaignId } = useCampaign();

  return useQuery<ContentItemSummary[], Error>({
    // Use a stable query key, even if activeCampaignId is null initially
    // The query is disabled when activeCampaignId is null/undefined
    queryKey: contentQueryKeys.list(activeCampaignId || '__no_campaign__'),
    queryFn: () => {
      if (!activeCampaignId) {
        // Should not happen due to 'enabled' flag, but defensively return empty array
        return Promise.resolve([]);
      }
      return fetchContentItems(activeCampaignId);
    },
    // Only enable the query if activeCampaignId has a value
    enabled: !!activeCampaignId,
    staleTime: 1000 * 60 * 5, // Data fresh for 5 minutes
    // Consider adding placeholderData if suitable
  });
}; 