import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';
import { contentQueryKeys } from './useContentItems'; // Reuse query keys
import { useCampaign } from '@/providers/CampaignProvider';

// API function to delete content
const deleteContentItem = async ({
  campaignId,
  contentId,
}: {
  campaignId: string;
  contentId: string;
}): Promise<void> => {
  await apiClient.delete(`/campaigns/${campaignId}/content/${contentId}`);
};

/**
 * Hook to delete a content item.
 */
export const useDeleteContent = () => {
  const queryClient = useQueryClient();
  const { activeCampaignId } = useCampaign();

  return useMutation<void, Error, { contentId: string }>({
    mutationFn: ({ contentId }) => {
      if (!activeCampaignId) {
        return Promise.reject(new Error('No active campaign selected.'));
      }
      return deleteContentItem({ campaignId: activeCampaignId, contentId });
    },
    onError: (error, variables, context) => {
      console.error('Error deleting content:', error);
      // Handle error (e.g., toast notification)
    },
    onSuccess: (data, variables, context) => {
      // Invalidate the list query on success
      // We don't know the campaign ID directly here without passing it
      // Invalidate all content lists if necessary, or pass campaignId to the mutation
      if (activeCampaignId) {
         queryClient.invalidateQueries({
           queryKey: contentQueryKeys.lists(activeCampaignId),
         });
         // Also remove the item from the detail cache if it exists
         queryClient.removeQueries({ 
             queryKey: contentQueryKeys.detail(activeCampaignId, variables.contentId) 
         });
      } else {
          // Invalidate all campaign content if no specific ID is available
          queryClient.invalidateQueries({queryKey: ['campaigns', undefined, 'content']})
      }

      console.log('Content deleted successfully');
      // Handle success (e.g., toast notification)
    },
  });
}; 