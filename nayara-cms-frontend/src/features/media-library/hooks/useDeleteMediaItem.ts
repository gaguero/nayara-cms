import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';
import { mediaLibraryKeys } from './useMediaLibraryItems'; // Reuse query keys
import { useCampaign } from '@/providers/CampaignProvider';
import { toast } from 'sonner';

// API function to delete a media item
const deleteMediaItem = async ({
  campaignId,
  mediaId,
}: {
  campaignId: string;
  mediaId: string;
}): Promise<void> => {
  // Adjust endpoint if needed
  await apiClient.delete(`/campaigns/${campaignId}/media-library/${mediaId}`);
};

/**
 * Hook to delete a media item.
 */
export const useDeleteMediaItem = () => {
  const queryClient = useQueryClient();
  const { activeCampaignId } = useCampaign();

  return useMutation<
    void,
    Error,
    { mediaId: string } // Input type for mutate
  >({
    mutationFn: ({ mediaId }) => {
      if (!activeCampaignId) {
        return Promise.reject(new Error('No active campaign selected.'));
      }
      return deleteMediaItem({ campaignId: String(activeCampaignId), mediaId });
    },
    onSuccess: (_, variables) => {
      const campaignIdStr = String(activeCampaignId);
      // Invalidate the media list query for the active campaign
      queryClient.invalidateQueries({
        queryKey: mediaLibraryKeys.lists(campaignIdStr), 
      });
      toast.success("Media Item Deleted", { 
        description: `Successfully deleted media item (ID: ${variables.mediaId}).` 
      });
    },
    onError: (error) => {
      console.error('Error deleting media item:', error);
      toast.error("Deletion Failed", {
        description: error.message || "Could not delete the media item.",
      });
    },
  });
}; 