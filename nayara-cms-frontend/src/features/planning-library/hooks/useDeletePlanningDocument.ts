import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/components/ui/use-toast';
import { apiClient } from '@/lib/apiClient';
import { planningDocumentKeys } from './planningDocumentKeys'; // Import the key factory
import { useCampaign } from '@/providers/CampaignProvider'; // To get active campaign ID

interface DeleteDocumentParams {
  documentId: string;
}

/**
 * API function to delete a planning document.
 * @param campaignId - The ID of the active campaign.
 * @param documentId - The ID of the document to delete.
 */
const deletePlanningDocument = async (
  campaignId: string,
  documentId: string,
): Promise<void> => {
  await apiClient.delete(
    `/campaigns/${campaignId}/planning-documents/${documentId}`,
  );
};

/**
 * React Query Mutation Hook for deleting a planning document.
 * Handles API call, cache invalidation, and user feedback.
 */
export const useDeletePlanningDocument = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { activeCampaignId } = useCampaign(); // Get active campaign context

  return useMutation<void, Error, DeleteDocumentParams>({
    mutationFn: ({ documentId }) => {
      if (!activeCampaignId) {
        // Should ideally not happen if component using this hook is rendered correctly
        return Promise.reject(new Error('No active campaign selected.'));
      }
      return deletePlanningDocument(activeCampaignId, documentId);
    },
    onSuccess: (_, variables) => {
      toast({
        title: 'Success',
        description: `Planning document deleted successfully.`,
      });
      // Invalidate queries related to planning documents for the active campaign
      queryClient.invalidateQueries({
        queryKey: planningDocumentKeys.list(activeCampaignId!), // Use factory
      });
      // Optionally invalidate specific document query if needed, though list invalidation often suffices
      // queryClient.invalidateQueries(planningDocumentKeys.detail(activeCampaignId!, variables.documentId));
    },
    onError: (error) => {
      toast({
        title: 'Error Deleting Document',
        description:
          error.message || 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
      console.error('Error deleting planning document:', error);
    },
  });
}; 