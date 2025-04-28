import { useNavigate, useParams } from 'react-router-dom';
import { useContentItem } from '../hooks/useContentItem';
import { useUpdateContent } from '../hooks/useUpdateContent';
import { ContentForm } from '../components/ContentForm';
import { toast } from "sonner";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Skeleton } from "@/components/ui/skeleton"; // For loading state
import { useCampaign } from '@/providers/CampaignProvider'; // To get active campaign ID

// Infer the form values type from the form component if needed, or redefine
type ContentFormValues = {
  title: string;
  body: string;
  contentType: string;
  status: string;
  mediaUrl?: string | undefined;
};

export function EditContentPage() {
  const navigate = useNavigate();
  const { id: contentId } = useParams<{ id: string }>(); // Get content ID from URL
  const { activeCampaignId } = useCampaign(); // Get active campaign ID
  const updateContentMutation = useUpdateContent();

  // Fetch the content item data
  const { 
      data: contentItem, 
      isLoading: isLoadingItem, 
      error: itemError 
  } = useContentItem(
      activeCampaignId ? String(activeCampaignId) : null, // Convert number to string
      contentId
  );

  const handleSubmit = (values: ContentFormValues) => {
    if (!contentId) {
        toast.error("Error", { description: "Content ID is missing." });
        return;
    }
    console.log('Submitting updated content:', values);
    updateContentMutation.mutate(
      { contentId, contentData: values }, 
      {
        onSuccess: (data) => {
          toast.success("Content Updated", {
            description: `Content item "${data.title}" updated successfully.`,
          });
          navigate('..'); 
        },
        onError: (error) => {
          toast.error("Error Updating Content", {
            description: error.message || "Could not update the content item.",
          });
          console.error('Update content error:', error);
        },
      }
    );
  };

  // Handle loading state
  const renderForm = () => {
    if (isLoadingItem) {
      return (
        <div className="space-y-4">
          <Skeleton className="h-8 w-1/4" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-8 w-1/4" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-8 w-1/4" />
          <Skeleton className="h-24 w-full" />
           <Skeleton className="h-8 w-1/4" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-8 w-1/4" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-24" />
        </div>
      );
    }

    if (itemError) {
        return <p className="text-destructive">Error loading content: {itemError.message}</p>;
    }

    if (!contentItem) {
        return <p>Content item not found.</p>;
    }

    return (
      <ContentForm 
        onSubmit={handleSubmit} 
        initialData={contentItem}
        isLoading={updateContentMutation.isPending}
        submitButtonText="Update Content"
      />
    );
  }

  return (
    <div className="container mx-auto py-6">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Edit Content</CardTitle>
        </CardHeader>
        <CardContent>
          {renderForm()}
        </CardContent>
      </Card>
    </div>
  );
} 