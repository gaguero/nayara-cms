import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';
import { contentQueryKeys } from './useContentItems'; // Reuse query keys
import { useCampaign } from '@/providers/CampaignProvider';
import { toast } from 'sonner';

// API function to delete a content item
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
export const useDeleteContentItem = () => {
  const queryClient = useQueryClient();
  const { activeCampaignId } = useCampaign();

  return useMutation<
    void,
    Error,
    { contentId: string } // Input type for mutate
  >({
    mutationFn: ({ contentId }) => {
      if (!activeCampaignId) {
        return Promise.reject(new Error('No active campaign selected.'));
      }
      return deleteContentItem({ campaignId: String(activeCampaignId), contentId });
    },
    onSuccess: (_, variables) => {
      const campaignIdStr = String(activeCampaignId);
      // Invalidate the content list query for the active campaign
      queryClient.invalidateQueries({
        queryKey: contentQueryKeys.lists(campaignIdStr), 
      });
      // Optional: Remove the specific item from the cache if needed
      // queryClient.removeQueries({
      //   queryKey: contentQueryKeys.detail(campaignIdStr, variables.contentId)
      // });
      toast.success("Content Item Deleted", { 
        description: `Successfully deleted content item (ID: ${variables.contentId}).` 
      });
    },
    onError: (error) => {
      console.error('Error deleting content item:', error);
      toast.error("Deletion Failed", {
        description: error.message || "Could not delete the content item.",
      });
    },
  });
}; 