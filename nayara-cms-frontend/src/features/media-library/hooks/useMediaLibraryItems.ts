import { useQuery, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';
import { useCampaign } from '@/providers/CampaignProvider';

// TODO: Define based on backend MediaItemResponseDto
// Assuming a structure similar to PlanningDocumentSummary for now
export interface MediaItemSummary {
  id: string;
  name: string; // Original filename or user-defined name
  description?: string | null;
  url: string; // URL to access the media file
  thumbnailUrl?: string; // Optional URL for image/video thumbnails
  fileSize: number;
  mimeType: string; // e.g., 'image/jpeg', 'video/mp4'
  uploadedAt: string; // ISO date string
  campaignId: string;
  // Add other relevant fields like dimensions (width, height) for images if needed
}

// API function to fetch media library items for a campaign
const fetchMediaLibraryItems = async (
  campaignId: string,
): Promise<MediaItemSummary[]> => {
  // Adjust endpoint if needed (e.g., might be just /media-library?campaignId=...)
  const { data } = await apiClient.get<MediaItemSummary[]>(
    `/campaigns/${campaignId}/media-library`, 
  );
  // TODO: Adapt if backend response is nested, e.g., data.mediaItems
  return data; 
};

// Query key factory for media library items
export const mediaLibraryKeys = {
  all: (campaignId: string) => ['campaigns', campaignId, 'media-library'] as const,
  lists: (campaignId: string) => [...mediaLibraryKeys.all(campaignId), 'list'] as const,
  list: (campaignId: string, filters: Record<string, any> = {}) => [...mediaLibraryKeys.lists(campaignId), filters] as const,
  details: (campaignId: string) => [...mediaLibraryKeys.all(campaignId), 'detail'] as const,
  detail: (campaignId: string, id: string) => [...mediaLibraryKeys.details(campaignId), id] as const,
};

/**
 * Hook to fetch a list of media items for the active campaign's library.
 */
export const useMediaLibraryItems = () => {
  const { activeCampaignId } = useCampaign();

  return useQuery<MediaItemSummary[], Error>({
    // Use a placeholder key if no campaign is active to prevent query errors
    queryKey: mediaLibraryKeys.list(activeCampaignId ? String(activeCampaignId) : '__no_campaign__'), 
    queryFn: () => {
      if (!activeCampaignId) {
        // Return empty array or handle as appropriate if no campaign selected
        return Promise.resolve([]); 
      }
      return fetchMediaLibraryItems(String(activeCampaignId));
    },
    // The query will only run if activeCampaignId is truthy (not null or 0)
    enabled: !!activeCampaignId, 
    staleTime: 1000 * 60 * 5, // 5 minutes cache time
  });
};

// --- Mutations (e.g., upload, delete) will be added in subsequent steps --- 