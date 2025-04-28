import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PlusCircle } from "lucide-react";
import { useMediaLibraryItems } from "../hooks/useMediaLibraryItems";
import { MediaItemGrid } from "../components/MediaItemGrid";
import { useState } from "react";
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
import { useDeleteMediaItem } from "../hooks/useDeleteMediaItem";

export function MediaLibraryPage() {
  const { data: mediaItems, isLoading, error } = useMediaLibraryItems();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const deleteMutation = useDeleteMediaItem();

  const handleDeleteRequest = (id: string) => {
    setShowDeleteConfirm(id);
  };

  const handleViewDetails = (id: string) => {
    // TODO: Implement navigation or modal to view/edit media item details
    console.log("View details requested for media item ID:", id);
    toast.info("View/Edit details functionality not yet implemented.");
  };

  const handleDeleteConfirm = () => {
    if (!showDeleteConfirm) return;
    deleteMutation.mutate({ mediaId: showDeleteConfirm }, {
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
    return <div className="text-destructive">Error loading media library: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Media Library</h1>
        <Button asChild>
          <Link to="./upload"> {/* Link to upload page */}
            <PlusCircle className="mr-2 h-4 w-4" /> Upload Media
          </Link>
        </Button>
      </div>

      <MediaItemGrid
        items={mediaItems || []}
        isLoading={isLoading}
        onDelete={handleDeleteRequest}
        onViewDetails={handleViewDetails}
      />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!showDeleteConfirm} onOpenChange={(open: boolean) => !open && setShowDeleteConfirm(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the media item.
              Associated content items might break if this media is removed.
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