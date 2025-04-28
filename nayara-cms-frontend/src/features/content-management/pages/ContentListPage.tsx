import { Button } from "@/components/ui/button";
import { useContentItems } from "../hooks/useContentItems";
import { ContentList } from "../components/ContentList";
import { Link } from "react-router-dom";
import { PlusCircle } from "lucide-react";
import { useDeleteContentItem } from "../hooks/useDeleteContentItem";
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

export function ContentListPage() {
  const { data: contentItems, isLoading, error } = useContentItems();
  const deleteContentMutation = useDeleteContentItem();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);

  const handleDeleteRequest = (id: string) => {
    setShowDeleteConfirm(id);
  };

  const handleDeleteConfirm = () => {
    if (!showDeleteConfirm) return;

    deleteContentMutation.mutate(
      { contentId: showDeleteConfirm },
      {
        onSuccess: () => {
          setShowDeleteConfirm(null);
        },
        onError: (err) => {
          console.error("Delete confirmation error:", err);
          setShowDeleteConfirm(null);
        },
      },
    );
  };

  if (error) {
    return <div className="text-destructive">Error loading content: {error.message}</div>;
  }

  // TODO: Implement proper edit handling (navigation or modal)
  const handleEdit = (id: string) => {
    console.log("Edit requested for item:", id);
    // Navigate to edit page: navigate(`./${id}/edit`);
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Content Management</h1>
        <Button asChild> 
          <Link to="./new"> 
            <PlusCircle className="mr-2 h-4 w-4" /> Create New Content
          </Link>
        </Button>
      </div>

      {/* Pass actual delete handler to ContentList */} 
      <ContentList 
        items={contentItems || []} 
        isLoading={isLoading} 
        onEdit={handleEdit} 
        onDelete={handleDeleteRequest} 
      />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!showDeleteConfirm} onOpenChange={(open: boolean) => !open && setShowDeleteConfirm(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the content item.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowDeleteConfirm(null)}>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDeleteConfirm}
              disabled={deleteContentMutation.isPending}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleteContentMutation.isPending ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
} 