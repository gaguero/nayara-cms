import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';
import { contentQueryKeys } from './useContentItems'; // Reuse query keys
import { ContentItemDetail } from './useContentItem'; // Reuse detail type
import { useCampaign } from '@/providers/CampaignProvider';

// Define the type for the data needed to update content
// TODO: Match backend UpdateContentDto (likely Partial<CreateContentData>)
interface UpdateContentData {
  title?: string;
  body?: string;
  contentType?: string;
  status?: string;
  mediaUrl?: string;
  // Add other updatable fields
}

// API function to update content
const updateContentItem = async ({
  campaignId,
  contentId,
  contentData,
}: {
  campaignId: string;
  contentId: string;
  contentData: UpdateContentData;
}): Promise<ContentItemDetail> => {
  const { data } = await apiClient.patch<ContentItemDetail>(
    `/campaigns/${campaignId}/content/${contentId}`,
    contentData,
  );
  return data;
};

/**
 * Hook to update an existing content item.
 */
export const useUpdateContent = () => {
  const queryClient = useQueryClient();
  const { activeCampaignId } = useCampaign();

  return useMutation<
    ContentItemDetail,
    Error,
    { contentId: string; contentData: UpdateContentData }
  >({
    mutationFn: ({ contentId, contentData }) => {
      if (!activeCampaignId) {
        return Promise.reject(new Error('No active campaign selected.'));
      }
      return updateContentItem({
        campaignId: activeCampaignId,
        contentId,
        contentData,
      });
    },
    onError: (error, variables, context) => {
      console.error('Error updating content:', error);
      // Handle error (e.g., toast notification)
    },
    onSuccess: (data, variables, context) => {
      // Invalidate both list and detail queries on success
      queryClient.invalidateQueries({
        queryKey: contentQueryKeys.lists(data.campaignId),
      });
      queryClient.invalidateQueries({
        queryKey: contentQueryKeys.detail(data.campaignId, data.id),
      });
      
      // Optionally update the detail query cache directly
      // queryClient.setQueryData(contentQueryKeys.detail(data.campaignId, data.id), data);
      
      console.log('Content updated successfully:', data);
      // Handle success (e.g., toast notification)
    },
  });
}; 