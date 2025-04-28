import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';
import { contentQueryKeys } from './useContentItems'; // Reuse query keys
import { ContentItemDetail } from './useContentItem'; // Reuse detail type for response
import { useCampaign } from '@/providers/CampaignProvider'; // Need campaign ID

// Define the type for the data needed to create content
// TODO: Match backend CreateContentDto
interface CreateContentData {
  title: string;
  body: string;
  contentType: string;
  status?: string;
  mediaUrl?: string;
  // Add other required or optional fields
}

// API function to create content
const createContentItem = async ({
  campaignId,
  contentData,
}: {
  campaignId: string;
  contentData: CreateContentData;
}): Promise<ContentItemDetail> => {
  const { data } = await apiClient.post<ContentItemDetail>(
    `/campaigns/${campaignId}/content`,
    contentData,
  );
  return data;
};

/**
 * Hook to create a new content item.
 */
export const useCreateContent = () => {
  const queryClient = useQueryClient();
  const { activeCampaignId } = useCampaign();

  return useMutation<ContentItemDetail, Error, CreateContentData>({
    mutationFn: (contentData) => {
      if (!activeCampaignId) {
        return Promise.reject(new Error('No active campaign selected.'));
      }
      return createContentItem({ campaignId: activeCampaignId, contentData });
    },
    // Optimistic update (optional but improves UX)
    // onMutate: async (newContent) => { ... },
    onError: (error, variables, context) => {
      // Handle errors, e.g., show a toast notification
      console.error('Error creating content:', error);
      // Optionally rollback optimistic update if used
    },
    onSuccess: (data, variables, context) => {
      // Invalidate queries to refetch the list after creation
      queryClient.invalidateQueries({
        queryKey: contentQueryKeys.lists(data.campaignId),
      });
      // Optionally, you can manually add the new item to the cache
      // queryClient.setQueryData(contentQueryKeys.list(data.campaignId), (old: any) => [...old, data]);
      
      // Optionally, prefetch or update the detail query for the new item
      queryClient.setQueryData(contentQueryKeys.detail(data.campaignId, data.id), data);
      
      // Handle success, e.g., show toast, navigate
      console.log('Content created successfully:', data);
    },
  });
}; 