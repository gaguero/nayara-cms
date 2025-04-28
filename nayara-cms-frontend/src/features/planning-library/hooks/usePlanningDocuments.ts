import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';
import { useCampaign } from '@/providers/CampaignProvider';

// TODO: Define based on backend PlanningDocumentResponseDto
export interface PlanningDocumentSummary {
  id: string;
  name: string;
  description?: string | null;
  fileUrl: string;
  fileSize: number;
  fileType: string;
  uploadedAt: string; // ISO date string
  campaignId: string;
}

// API function to fetch planning documents
const fetchPlanningDocuments = async (
  campaignId: string,
): Promise<PlanningDocumentSummary[]> => {
  const { data } = await apiClient.get<PlanningDocumentSummary[]>(
    `/campaigns/${campaignId}/planning-documents`,
  );
  return data;
};

// Query key factory
export const planningDocumentKeys = {
  all: (campaignId: string) => ['campaigns', campaignId, 'planning-documents'] as const,
  lists: (campaignId: string) => [...planningDocumentKeys.all(campaignId), 'list'] as const,
  list: (campaignId: string, filters: Record<string, any> = {}) => [...planningDocumentKeys.lists(campaignId), filters] as const,
  details: (campaignId: string) => [...planningDocumentKeys.all(campaignId), 'detail'] as const,
  detail: (campaignId: string, id: string) => [...planningDocumentKeys.details(campaignId), id] as const,
};

/**
 * Hook to fetch a list of planning documents for the active campaign.
 */
export const usePlanningDocuments = () => {
  const { activeCampaignId } = useCampaign();

  return useQuery<PlanningDocumentSummary[], Error>({
    queryKey: planningDocumentKeys.list(activeCampaignId || '__no_campaign__'),
    queryFn: () => {
      if (!activeCampaignId) {
        return Promise.resolve([]);
      }
      return fetchPlanningDocuments(activeCampaignId);
    },
    enabled: !!activeCampaignId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

// --- Mutations (will be added later, e.g., for upload/delete) ---

// Example: Delete Mutation Structure (implementation in later steps)
// const deletePlanningDocument = async ({ campaignId, documentId }: { campaignId: string; documentId: string }): Promise<void> => {
//   await apiClient.delete(`/campaigns/${campaignId}/planning-documents/${documentId}`);
// };
// 
// export const useDeletePlanningDocument = () => {
//   const queryClient = useQueryClient();
//   const { activeCampaignId } = useCampaign();
// 
//   return useMutation<void, Error, { documentId: string }>({
//     mutationFn: ({ documentId }) => {
//       if (!activeCampaignId) return Promise.reject(new Error('No active campaign'));
//       return deletePlanningDocument({ campaignId: activeCampaignId, documentId });
//     },
//     onSuccess: (_, variables) => {
//       if (activeCampaignId) {
//         queryClient.invalidateQueries({ queryKey: planningDocumentKeys.lists(activeCampaignId) });
//       }
//       // Optionally remove from detail cache
//       // queryClient.removeQueries({ queryKey: planningDocumentKeys.detail(activeCampaignId, variables.documentId) });
//       console.log('Planning document deleted successfully');
//     },
//     onError: (error) => {
//       console.error('Error deleting planning document:', error);
//     },
//   });
// }; 