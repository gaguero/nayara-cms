import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { MediaItemSummary } from "../hooks/useMediaLibraryItems";
import { Trash2, Eye, Image as ImageIcon, Video, File as FileIcon } from "lucide-react"; // Import icons

interface MediaItemGridProps {
  items: MediaItemSummary[];
  isLoading?: boolean;
  onDelete?: (id: string) => void;
  onViewDetails?: (id: string) => void; // Optional callback for viewing details
}

// Helper to get appropriate icon based on mime type
const getIconForMimeType = (mimeType: string): React.ReactNode => {
  if (mimeType.startsWith('image/')) {
    return <ImageIcon className="h-8 w-8 text-muted-foreground" />;
  }
  if (mimeType.startsWith('video/')) {
    return <Video className="h-8 w-8 text-muted-foreground" />;
  }
  return <FileIcon className="h-8 w-8 text-muted-foreground" />;
};

// Helper function to format file size
function formatBytes(bytes: number, decimals = 2): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export function MediaItemGrid({
  items,
  isLoading = false,
  onDelete,
  onViewDetails,
}: MediaItemGridProps) {

  const renderSkeleton = () => (
    <Card>
      <CardHeader>
        <Skeleton className="h-32 w-full" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-5 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Skeleton className="h-8 w-8 rounded-md" />
        <Skeleton className="h-8 w-8 rounded-md" />
      </CardFooter>
    </Card>
  );

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={`skeleton-${index}`}>{renderSkeleton()}</div>
        ))}
      </div>
    );
  }

  if (!items || items.length === 0) {
    return (
      <p className="text-center text-muted-foreground py-8">No media items found.</p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {items.map((item) => (
        <Card key={item.id} className="flex flex-col">
          <CardHeader className="p-0 aspect-square flex items-center justify-center overflow-hidden">
            {/* Display thumbnail or icon */}
            {item.thumbnailUrl ? (
              <img 
                src={item.thumbnailUrl} 
                alt={item.name} 
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="flex items-center justify-center h-full w-full bg-muted">
                {getIconForMimeType(item.mimeType)}
              </div>
            )}
          </CardHeader>
          <CardContent className="p-4 flex-grow">
            <p className="font-semibold text-sm truncate mb-1" title={item.name}>{item.name}</p>
            <p className="text-xs text-muted-foreground">
              {item.mimeType} - {formatBytes(item.fileSize)}
            </p>
            {/* Optional: Add description if available */}
            {/* {item.description && <p className="text-xs text-muted-foreground mt-1 truncate">{item.description}</p>} */}
          </CardContent>
          <CardFooter className="p-2 pt-0 flex justify-end space-x-1">
            {onViewDetails && (
                <Button 
                    variant="ghost" 
                    size="icon" 
                    title="View Details"
                    onClick={() => onViewDetails(item.id)}>
                    <Eye className="h-4 w-4" />
                </Button>
            )}
            {onDelete && (
                <Button
                    variant="ghost"
                    size="icon"
                    title="Delete"
                    onClick={() => onDelete(item.id)}
                    className="text-destructive hover:text-destructive/90"
                >
                    <Trash2 className="h-4 w-4" />
                </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
} 