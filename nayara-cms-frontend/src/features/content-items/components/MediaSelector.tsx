import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { MediaItemGrid } from '@/features/media-library/components/MediaItemGrid';
import { useMediaLibraryItems, MediaItemSummary } from '@/features/media-library/hooks/useMediaLibraryItems';
import { MediaNeed } from './MediaNeedsDisplay'; // Import the need definition
import { ImagePlus, Link as LinkIcon } from 'lucide-react';
import { toast } from 'sonner';

interface MediaSelectorProps {
  mediaNeed: MediaNeed;
  // Callback function when a media item is selected/linked
  onMediaSelect: (mediaNeedKey: string, selectedMediaId: string) => void;
  // Optional: Pass the currently selected media ID to display it
  selectedMediaId?: string | null;
}

// Basic component to show the currently linked media (if any)
const LinkedMediaDisplay = ({ mediaId, onUnlink }: { mediaId: string; onUnlink: () => void }) => {
  // TODO: Fetch actual media details based on mediaId to show name/thumbnail
  // For now, just show the ID and an unlink button
  return (
    <div className="flex items-center justify-between p-2 border rounded-md bg-slate-50">
      <span className="text-sm text-muted-foreground truncate">Linked: Media ID {mediaId}</span>
      <Button variant="ghost" size="sm" onClick={onUnlink} title="Unlink Media">
        Unlink
      </Button>
    </div>
  );
};


export function MediaSelector({ 
  mediaNeed, 
  onMediaSelect, 
  selectedMediaId 
}: MediaSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { data: mediaItems, isLoading, error } = useMediaLibraryItems(); // Fetch library items

  // TODO: Filter mediaItems based on mediaNeed.requiredType, dimensions, size etc.
  const compatibleMediaItems = mediaItems; // Placeholder - apply filtering

  const handleSelectMedia = (mediaId: string) => {
    onMediaSelect(mediaNeed.key, mediaId);
    setIsOpen(false); // Close dialog on selection
    toast.success(`Media selected for ${mediaNeed.label}`);
  };

  const handleUploadNew = () => {
    // TODO: Implement navigation or modal logic for uploading new media
    setIsOpen(false);
    toast.info("Upload new media functionality not yet implemented.");
    // Example: navigate('/media-library/upload?fulfillsNeed=' + mediaNeed.key)
  };

  const handleUnlink = () => {
      // Call onMediaSelect with null to unlink
      onMediaSelect(mediaNeed.key, ''); // Assuming empty string signifies unlink
      toast.info(`Media unlinked from ${mediaNeed.label}`);
  };

  return (
    <div className="p-4 border rounded-md my-2">
      <div className="flex items-center justify-between mb-2">
          <p className="font-medium text-sm">{mediaNeed.label}</p>
          {/* Show selected ID or button to select */} 
          {!selectedMediaId ? (
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                    <LinkIcon className="mr-2 h-4 w-4" /> Select Media
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl"> {/* Wider dialog */}
                    <DialogHeader>
                    <DialogTitle>Select Media for "{mediaNeed.label}"</DialogTitle>
                    <DialogDescription>
                        Choose an existing item from the library or upload a new one.
                        {/* TODO: Show filtering criteria based on mediaNeed */}
                    </DialogDescription>
                    </DialogHeader>
                    
                    {/* Media Library Grid inside Dialog */}
                    <div className="max-h-[60vh] overflow-y-auto p-1"> {/* Scrollable area */}
                        {error && <p className="text-destructive text-center">Error loading media library: {error.message}</p>}
                        <MediaItemGrid 
                            items={compatibleMediaItems || []} 
                            isLoading={isLoading}
                            // Modify MediaItemGrid to have an onSelect prop or clickable cards
                            // For now, using placeholder buttons on the grid itself is complex
                            // A simpler approach: Add a select button within the DialogFooter per item?
                            // Or, make the cards themselves clickable if MediaItemGrid is adapted.

                            // Placeholder: Adding select function directly for demo
                            onViewDetails={(id) => handleSelectMedia(id)} // Using onViewDetails as temporary select trigger
                        />
                    </div>

                    <DialogFooter className="mt-4 justify-between">
                    <Button variant="outline" onClick={handleUploadNew}>
                        <ImagePlus className="mr-2 h-4 w-4" /> Upload New
                    </Button>
                    <DialogClose asChild>
                        <Button variant="secondary">Cancel</Button>
                    </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
          ) : (
            <LinkedMediaDisplay mediaId={selectedMediaId} onUnlink={handleUnlink} />
          )}
      </div>
      {/* Optionally display the MediaNeed details again here */}
      {/* <MediaNeedsDisplay needs={[mediaNeed]} /> */}
    </div>
  );
} 