import { Button } from "@/components/ui/button";
import { usePlanningDocuments } from "../hooks/usePlanningDocuments";
import { PlanningDocumentList } from "../components/PlanningDocumentList";
import { Link } from "react-router-dom";
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle 
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { useDeletePlanningDocument } from "../hooks/useDeletePlanningDocument";

export function PlanningLibraryPage() {
  const { data: documents, isLoading, error } = usePlanningDocuments();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const deleteMutation = useDeletePlanningDocument();

  const handleDeleteRequest = (id: string) => {
    setShowDeleteConfirm(id);
  };

  const handleDeleteConfirm = () => {
    if (!showDeleteConfirm) return;
    deleteMutation.mutate({ documentId: showDeleteConfirm }, {
      onSuccess: () => {
        setShowDeleteConfirm(null);
      },
      onError: (err) => {
        console.error("Delete confirmation error:", err);
        setShowDeleteConfirm(null);
      },
    });
  };

  if (error) {
    return <div className="text-destructive">Error loading documents: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Planning Library</h1>
        <Button asChild>
          <Link to="./upload"> {/* Link to upload page */}
            <PlusCircle className="mr-2 h-4 w-4" /> Upload Document
          </Link>
        </Button>
      </div>

      <PlanningDocumentList
        documents={documents || []}
        isLoading={isLoading}
        onDelete={handleDeleteRequest} 
      />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!showDeleteConfirm} onOpenChange={(open: boolean) => !open && setShowDeleteConfirm(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the planning document.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowDeleteConfirm(null)}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              disabled={deleteMutation.isPending}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleteMutation.isPending ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
} 