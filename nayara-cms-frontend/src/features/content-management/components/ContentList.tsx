import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContentItemSummary } from "../hooks/useContentItems"; // Import the type
import { format } from 'date-fns'; // For formatting dates
import { Pencil, Trash2 } from 'lucide-react'; // Icons for actions
import { Link } from 'react-router-dom'; // For linking to edit page

interface ContentListProps {
  items: ContentItemSummary[];
  onEdit: (id: string) => void; // Callback for edit action
  onDelete: (id: string) => void; // Callback for delete action
  isLoading?: boolean; // Optional flag for loading state
}

// Helper to determine badge variant based on status
const getStatusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
  switch (status.toLowerCase()) {
    case 'published':
      return 'default';
    case 'draft':
      return 'secondary';
    case 'archived':
      return 'outline';
    case 'review':
      return 'secondary'; // Or another distinct variant
    default:
      return 'secondary';
  }
};

export function ContentList({ items, onEdit, onDelete, isLoading }: ContentListProps) {
  if (isLoading) {
    // TODO: Implement a proper skeleton loader for the table rows
    return <div>Loading content...</div>;
  }

  if (!items || items.length === 0) {
    return <p className="text-center text-muted-foreground py-4">No content items found for this campaign.</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Updated</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.title}</TableCell>
            <TableCell>{item.contentType}</TableCell>
            <TableCell>
              <Badge variant={getStatusVariant(item.status)}>{item.status}</Badge>
            </TableCell>
            <TableCell>{format(new Date(item.updatedAt), 'PPp')}</TableCell>
            <TableCell className="text-right space-x-2">
              {/* Link to the edit page */} 
              <Button variant="ghost" size="icon" asChild>
                <Link to={`./${item.id}/edit`}> {/* Assuming relative path from list page */} 
                  <Pencil className="h-4 w-4" />
                </Link>
              </Button>
              {/* Delete Button - Consider adding confirmation */} 
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => onDelete(item.id)}
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