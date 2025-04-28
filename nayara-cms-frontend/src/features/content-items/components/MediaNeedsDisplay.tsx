import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Image as ImageIcon, Video, File as FileIcon } from "lucide-react";

// Interface representing a single media requirement for a content item
// TODO: Align this with the actual structure defined in the backend/content types
export interface MediaNeed {
  key: string; // Unique key for this requirement (e.g., 'heroImage', 'promoVideo')
  label: string; // User-friendly label (e.g., "Hero Image", "Promotional Video")
  description?: string; // Optional description of the requirement
  requiredType: 'image' | 'video' | 'document' | 'any'; // Type of media needed
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  maxSizeMb?: number; // Max size in Megabytes
  isFulfilled: boolean; // Whether this need has been met (passed from parent)
}

interface MediaNeedsDisplayProps {
  needs: MediaNeed[];
}

// Helper to get appropriate icon based on required type
const getIconForType = (type: MediaNeed['requiredType']): React.ReactNode => {
  switch (type) {
    case 'image': return <ImageIcon className="h-4 w-4 mr-2" />;
    case 'video': return <Video className="h-4 w-4 mr-2" />;
    case 'document': return <FileIcon className="h-4 w-4 mr-2" />;
    default: return null;
  }
};

export function MediaNeedsDisplay({ needs }: MediaNeedsDisplayProps) {
  if (!needs || needs.length === 0) {
    return null; // Don't render anything if there are no needs
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Media Requirements</CardTitle>
        <CardDescription>
          This content item requires the following media assets.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {needs.map((need) => (
            <li key={need.key} className="flex items-start justify-between p-3 border rounded-md bg-muted/30">
              <div>
                <div className="font-medium flex items-center mb-1">
                  {getIconForType(need.requiredType)}
                  {need.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {need.description || `Required type: ${need.requiredType}`}
                </p>
                {/* Display constraints */}
                <div className="text-xs text-muted-foreground mt-1 space-x-2">
                    {need.minWidth && <span>Min Width: {need.minWidth}px</span>}
                    {need.minHeight && <span>Min Height: {need.minHeight}px</span>}
                    {need.maxWidth && <span>Max Width: {need.maxWidth}px</span>}
                    {need.maxHeight && <span>Max Height: {need.maxHeight}px</span>}
                    {need.maxSizeMb && <span>Max Size: {need.maxSizeMb}MB</span>}
                </div>
              </div>
              <Badge variant={need.isFulfilled ? "default" : "outline"} className={`ml-4 whitespace-nowrap ${need.isFulfilled ? 'bg-green-100 text-green-800' : ''}`}>
                {need.isFulfilled ? (
                  <CheckCircle2 className="h-4 w-4 mr-1" />
                ) : (
                  <XCircle className="h-4 w-4 mr-1" />
                )}
                {need.isFulfilled ? "Fulfilled" : "Required"}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
} 