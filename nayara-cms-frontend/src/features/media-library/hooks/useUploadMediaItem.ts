import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';
import { mediaLibraryKeys, MediaItemSummary } from './useMediaLibraryItems'; // Import from media library hook
import { useCampaign } from '@/providers/CampaignProvider';
import { toast } from 'sonner'; // Import toast

// Interface for metadata needed when uploading (adjust if backend needs more/less)
interface UploadMediaMetadata {
  name: string; // Usually derived from filename client-side but can be overridden
  description?: string;
  // Add other metadata if needed, e.g., altText for images
  altText?: string;
}

// API function to upload a media item
const uploadMediaItem = async ({
  campaignId,
  metadata,
  file,
}: {
  campaignId: string;
  metadata: UploadMediaMetadata;
  file: File;
}): Promise<MediaItemSummary> => {
  const formData = new FormData();
  formData.append('file', file); // Key 'file' must match backend expectations
  formData.append('name', metadata.name);
  if (metadata.description) {
    formData.append('description', metadata.description);
  }
  if (metadata.altText) {
    formData.append('altText', metadata.altText);
  }
  // Add any other metadata fields to the form data

  // Adjust endpoint as needed
  const { data } = await apiClient.post<MediaItemSummary>(
    `/campaigns/${campaignId}/media-library`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      // TODO: Consider adding upload progress tracking if needed
    },
  );
  return data;
};

/**
 * Hook to upload a new media item to the library.
 */
export const useUploadMediaItem = () => {
  const queryClient = useQueryClient();
  const { activeCampaignId } = useCampaign();

  return useMutation<
    MediaItemSummary,
    Error,
    { metadata: UploadMediaMetadata; file: File } // Input type for mutate function
  >({
    mutationFn: ({ metadata, file }) => {
      if (!activeCampaignId) {
        return Promise.reject(new Error('No active campaign selected.'));
      }
      return uploadMediaItem({ campaignId: String(activeCampaignId), metadata, file });
    },
    onError: (error) => {
      console.error('Error uploading media item:', error);
      // Use toast for user feedback
      toast.error("Upload Failed", {
        description: error.message || "Could not upload the media item. Please try again.",
      });
    },
    onSuccess: (data) => {
      console.log('Media item uploaded successfully:', data);
      // Invalidate the media library list query on success
      if (activeCampaignId) {
          queryClient.invalidateQueries({
              queryKey: mediaLibraryKeys.lists(String(activeCampaignId)),
          });
      }
      // Use toast for user feedback
      toast.success("Media Uploaded", { description: `'${data.name}' uploaded successfully.` });
    },
  });
}; 