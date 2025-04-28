import { useNavigate } from 'react-router-dom';
import { useCreateContent } from '../hooks/useCreateContent';
import { ContentForm } from '../components/ContentForm';
import { toast } from "sonner";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

// Infer the form values type from the form component if needed, or redefine
type ContentFormValues = {
  title: string;
  body: string;
  contentType: string;
  status: string;
  mediaUrl?: string | undefined;
};

export function NewContentPage() {
  const navigate = useNavigate();
  const createContentMutation = useCreateContent();

  const handleSubmit = (values: ContentFormValues) => {
    console.log('Submitting new content:', values);
    createContentMutation.mutate(values, {
      onSuccess: (data) => {
        toast.success("Content Created", {
          description: `Content item "${data.title}" created successfully.`,
        });
        navigate('..');
      },
      onError: (error) => {
        toast.error("Error Creating Content", {
          description: error.message || "Could not create the content item.",
        });
        console.error('Create content error:', error);
      },
    });
  };

  return (
    <div className="container mx-auto py-6">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Create New Content</CardTitle>
        </CardHeader>
        <CardContent>
          <ContentForm 
            onSubmit={handleSubmit} 
            isLoading={createContentMutation.isPending}
            submitButtonText="Create Content"
          />
        </CardContent>
      </Card>
    </div>
  );
} 