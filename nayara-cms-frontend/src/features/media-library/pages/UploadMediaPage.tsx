import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { MediaUploadForm } from "../components/MediaUploadForm";
import { useUploadMediaItem } from "../hooks/useUploadMediaItem";

export function UploadMediaPage() {
  const navigate = useNavigate();
  const uploadMutation = useUploadMediaItem();

  const handleSubmit = (
    values: { name: string; description?: string; altText?: string },
    file: File
  ) => {
    uploadMutation.mutate(
      { metadata: values, file: file },
      {
        onSuccess: (result) => {
          toast.success("Media Uploaded", { description: `'${result.name}' uploaded successfully.` });
          navigate(".."); // Navigate back to media library
        },
        onError: (error) => {
          toast.error("Upload Failed", {
            description: error.message || "Could not upload the media item. Please try again.",
          });
        },
      }
    );
  };

  return (
    <div className="container mx-auto py-6 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Upload New Media Item</h1>
      <MediaUploadForm 
        onSubmit={handleSubmit} 
        isSubmitting={uploadMutation.isPending} 
      />
    </div>
  );
} 