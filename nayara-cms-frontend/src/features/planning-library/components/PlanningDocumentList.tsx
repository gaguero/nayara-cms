import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlanningDocumentSummary } from "../hooks/usePlanningDocuments";
import { format } from 'date-fns';
import { Trash2, Download, FileText } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";

interface PlanningDocumentListProps {
  documents: PlanningDocumentSummary[];
  onDelete: (id: string) => void;
  isLoading?: boolean;
}

// Helper function to format file size
function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export function PlanningDocumentList({
  documents,
  onDelete,
  isLoading,
}: PlanningDocumentListProps) {

  const renderSkeleton = () => (
    <TableRow>
      <TableCell><Skeleton className="h-5 w-8" /></TableCell>
      <TableCell><Skeleton className="h-5 w-48" /></TableCell>
      <TableCell><Skeleton className="h-5 w-24" /></TableCell>
      <TableCell><Skeleton className="h-5 w-16" /></TableCell>
      <TableCell><Skeleton className="h-5 w-32" /></TableCell>
      <TableCell className="text-right"><Skeleton className="h-8 w-20 ml-auto" /></TableCell>
    </TableRow>
  );

  if (!isLoading && (!documents || documents.length === 0)) {
    return <p className="text-center text-muted-foreground py-4">No planning documents found.</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]"></TableHead> {/* Icon column */}
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Uploaded</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {isLoading
          ? Array.from({ length: 3 }).map((_, index) => renderSkeleton()) // Show 3 skeleton rows
          : documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell>
                  <FileText className="h-5 w-5 text-muted-foreground" />
                </TableCell>
                <TableCell className="font-medium">{doc.name}</TableCell>
                <TableCell>{doc.fileType}</TableCell>
                <TableCell>{formatBytes(doc.fileSize)}</TableCell>
                <TableCell>{format(new Date(doc.uploadedAt), 'PP')}</TableCell>
                <TableCell className="text-right space-x-1">
                  {/* Download Button - needs backend implementation to serve file */}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => console.log('Download clicked for:', doc.id, doc.fileUrl)} // Placeholder
                    // TODO: Implement actual download logic - potentially link to backend endpoint
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                  {/* Delete Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDelete(doc.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
      </TableBody>
    </Table>
  );
} 