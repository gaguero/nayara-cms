import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';
import { planningDocumentKeys, PlanningDocumentSummary } from './usePlanningDocuments';
import { useCampaign } from '@/providers/CampaignProvider';

interface UploadDocumentData {
  name: string;
  description?: string;
}

// API function to upload a planning document
const uploadPlanningDocument = async ({
  campaignId,
  metadata,
  file,
}: {
  campaignId: string;
  metadata: UploadDocumentData;
  file: File;
}): Promise<PlanningDocumentSummary> => {
  // Use FormData for multipart/form-data requests
  const formData = new FormData();
  formData.append('file', file); // Key must match FileInterceptor field name in backend
  formData.append('name', metadata.name);
  if (metadata.description) {
    formData.append('description', metadata.description);
  }

  const { data } = await apiClient.post<PlanningDocumentSummary>(
    `/campaigns/${campaignId}/planning-documents`,
    formData,
    {
      headers: {
        // Let Axios/browser set Content-Type for FormData
        'Content-Type': 'multipart/form-data',
      },
      // Optional: Add progress tracking here if needed
    },
  );
  return data;
};

/**
 * Hook to upload a new planning document.
 */
export const useUploadPlanningDocument = () => {
  const queryClient = useQueryClient();
  const { activeCampaignId } = useCampaign();

  return useMutation<
    PlanningDocumentSummary,
    Error,
    { metadata: UploadDocumentData; file: File }
  >({
    mutationFn: ({ metadata, file }) => {
      if (!activeCampaignId) {
        return Promise.reject(new Error('No active campaign selected.'));
      }
      return uploadPlanningDocument({ campaignId: activeCampaignId, metadata, file });
    },
    onError: (error) => {
      console.error('Error uploading planning document:', error);
      // Handle error (e.g., toast notification)
    },
    onSuccess: (data) => {
      // Invalidate the list query for planning documents on success
      queryClient.invalidateQueries({
        queryKey: planningDocumentKeys.lists(data.campaignId),
      });
      console.log('Planning document uploaded successfully:', data);
      // Handle success (e.g., toast notification)
    },
  });
}; 