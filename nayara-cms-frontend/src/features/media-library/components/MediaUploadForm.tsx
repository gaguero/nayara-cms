import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { ControllerRenderProps } from "react-hook-form";

// Schema includes name, optional description, and optional altText
const mediaUploadFormSchema = z.object({
  name: z.string().min(1, { message: "Media name cannot be empty." }),
  description: z.string().optional(),
  altText: z.string().optional(),
});

type MediaUploadFormValues = z.infer<typeof mediaUploadFormSchema>;

interface MediaUploadFormProps {
  onSubmit: (values: MediaUploadFormValues, file: File) => void;
  isSubmitting?: boolean;
  submitButtonText?: string;
}

export function MediaUploadForm({
  onSubmit,
  isSubmitting = false,
  submitButtonText = "Upload Media",
}: MediaUploadFormProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const form = useForm<MediaUploadFormValues>({
    resolver: zodResolver(mediaUploadFormSchema),
    defaultValues: {
      name: "",
      description: "",
      altText: "",
    },
  });

  // Create or revoke preview URL when file changes
  useEffect(() => {
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(objectUrl);
      // Clean up the object URL on component unmount or when file changes
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreviewUrl(null);
    }
  }, [selectedFile]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setFileError(null);
      // Pre-fill name field if empty
      if (!form.getValues('name')) {
        form.setValue('name', file.name.replace(/\.[^/.]+$/, ""));
      }
    } else {
      setSelectedFile(null);
    }
  };

  const handleSubmit = (values: MediaUploadFormValues) => {
    if (!selectedFile) {
      setFileError("Please select a file to upload.");
      return;
    }
    // TODO: Add client-side validation for file type/size if needed
    onSubmit(values, selectedFile);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        {/* File Input */}
        <FormItem>
          <FormLabel>Media File</FormLabel>
          <FormControl>
            <Input
              type="file"
              onChange={handleFileChange}
              disabled={isSubmitting}
              className="pt-2"
              // Consider adding accept attribute for specific file types
              // accept="image/*,video/*,.pdf" 
            />
          </FormControl>
          <FormDescription>
            Select the image, video, or document to upload.
          </FormDescription>
          {fileError && <p className="text-sm font-medium text-destructive">{fileError}</p>}
        </FormItem>

        {/* Image Preview */}
        {previewUrl && (
          <div className="mt-4">
            <img src={previewUrl} alt="Preview" className="max-h-40 rounded-md border" />
          </div>
        )}

        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }: { field: ControllerRenderProps<MediaUploadFormValues, 'name'> }) => (
            <FormItem>
              <FormLabel>Media Name</FormLabel>
              <FormControl>
                <Input placeholder="E.g., Hero Background Image" {...field} disabled={isSubmitting} />
              </FormControl>
              <FormDescription>A descriptive name for this media item.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Alt Text Field (Optional - maybe show only for images?) */}
        <FormField
          control={form.control}
          name="altText"
          render={({ field }: { field: ControllerRenderProps<MediaUploadFormValues, 'altText'> }) => (
            <FormItem>
              <FormLabel>Alt Text (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Describe the image for accessibility" {...field} disabled={isSubmitting} />
              </FormControl>
              <FormDescription>Important for SEO and screen readers, especially for images.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description Field (Optional) */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }: { field: ControllerRenderProps<MediaUploadFormValues, 'description'> }) => (
            <FormItem>
              <FormLabel>Description (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Internal notes or details about the media..."
                  className="resize-y"
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting || !selectedFile}>
          {isSubmitting ? "Uploading..." : submitButtonText}
        </Button>
      </form>
    </Form>
  );
} 