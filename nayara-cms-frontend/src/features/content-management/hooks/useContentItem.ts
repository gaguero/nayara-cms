import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';
import { contentQueryKeys } from './useContentItems'; // Reuse the query key factory

// Define the expected shape of a full content item
// TODO: Match backend DTO (likely includes more fields like 'body')
export interface ContentItemDetail {
  id: string;
  title: string;
  body: string; // Assuming a main content body
  contentType: string;
  mediaUrl?: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
  campaignId: string;
  // Add any other fields returned by the backend
  selectedMedia?: Record<string, string | null>; // Add selectedMedia for linked assets
}

// API function to fetch a single content item
const fetchContentItem = async (
  campaignId: string,
  contentId: string,
): Promise<ContentItemDetail> => {
  const { data } = await apiClient.get<ContentItemDetail>(
    `/campaigns/${campaignId}/content/${contentId}`,
  );
  return data;
};

/**
 * Hook to fetch details for a single content item.
 * @param campaignId The ID of the campaign the content belongs to.
 * @param contentId The ID of the content item to fetch.
 */
export const useContentItem = (campaignId: string | null | undefined, contentId: string | null | undefined) => {

  return useQuery<ContentItemDetail, Error>({
    // Use stable query keys, even if IDs are null/undefined initially
    queryKey: contentQueryKeys.detail(campaignId || '_', contentId || '_'),
    queryFn: () => {
      if (!campaignId || !contentId) {
        // This should not happen if 'enabled' is used correctly, but acts as a safeguard
        return Promise.reject(new Error('Missing campaignId or contentId for fetching content item'));
      }
      return fetchContentItem(campaignId, contentId);
    },
    // Only enable the query if both campaignId and contentId have values
    enabled: !!campaignId && !!contentId, 
    staleTime: 1000 * 60 * 5, // Data fresh for 5 minutes
  });
}; 