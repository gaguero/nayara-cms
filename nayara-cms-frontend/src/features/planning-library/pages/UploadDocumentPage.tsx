import { UploadForm } from "../components/UploadForm";
import { useUploadPlanningDocument } from "../hooks/useUploadPlanningDocument";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function UploadDocumentPage() {
  const navigate = useNavigate();
  const uploadMutation = useUploadPlanningDocument();

  const handleSubmit = (values: { name: string; description?: string | undefined }, file: File) => {
    uploadMutation.mutate(
      { 
        metadata: { name: values.name, description: values.description }, 
        file: file 
      },
      {
        onSuccess: (result) => {
          toast.success("Success!", { description: `Document '${result.name}' uploaded successfully.` });
          navigate(".."); // Navigate back to the library list
        },
        onError: (error) => {
          toast.error("Upload Failed", {
            description: error.message || "Could not upload the document. Please try again.",
          });
        },
      }
    );
  };

  return (
    <div className="container mx-auto py-6 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Upload New Planning Document</h1>
      <UploadForm 
        onSubmit={handleSubmit} 
        isSubmitting={uploadMutation.isPending} 
      />
    </div>
  );
} 