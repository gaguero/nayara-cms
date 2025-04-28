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
import { useState } from "react";
import { ControllerRenderProps, FieldPath, FieldValues } from "react-hook-form";

// Schema for the metadata part of the form
const uploadFormSchema = z.object({
  name: z.string().min(2, { message: "Document name must be at least 2 characters." }),
  description: z.string().optional(),
  // File object validation is handled by ParseFilePipe in the backend controller usually,
  // but basic client-side checks can be added if needed (e.g., file type, size)
});

type UploadFormValues = z.infer<typeof uploadFormSchema>;

interface UploadFormProps {
  onSubmit: (values: UploadFormValues, file: File) => void;
  isLoading?: boolean;
  isSubmitting?: boolean;
  submitButtonText?: string;
}

export function UploadForm({
  onSubmit,
  isLoading = false,
  isSubmitting = false,
  submitButtonText = "Upload Document",
}: UploadFormProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const form = useForm<UploadFormValues>({
    resolver: zodResolver(uploadFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setFileError(null);
      // Optionally pre-fill name field based on filename
      if (!form.getValues('name')) {
          form.setValue('name', file.name.replace(/\.[^/.]+$/, "")); // Remove extension
      }
    } else {
      setSelectedFile(null);
    }
  };

  const handleSubmit = (values: UploadFormValues) => {
    if (!selectedFile) {
      setFileError("Please select a file to upload.");
      return;
    }
    // TODO: Add client-side file size/type validation if desired
    onSubmit(values, selectedFile);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        {/* File Input - Basic HTML input for now */}
        <FormItem>
            <FormLabel>File</FormLabel>
            <FormControl>
                <Input 
                    type="file" 
                    onChange={handleFileChange} 
                    disabled={isLoading} 
                    className="pt-2" // Adjust padding for file input
                />
            </FormControl>
            <FormDescription>
                Select the planning document to upload. 
                {/* TODO: Add size/type limits info */} 
            </FormDescription>
            {/* Display file-specific error */}
            {fileError && <p className="text-sm font-medium text-destructive">{fileError}</p>}
        </FormItem>

        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }: { field: ControllerRenderProps<UploadFormValues, 'name'> }) => (
            <FormItem>
              <FormLabel>Document Name</FormLabel>
              <FormControl>
                <Input placeholder="E.g., Q3 Marketing Strategy" {...field} disabled={isLoading} />
              </FormControl>
              <FormDescription>
A name for this planning document.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description Field (Optional) */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }: { field: ControllerRenderProps<UploadFormValues, 'description'> }) => (
            <FormItem>
              <FormLabel>Description (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Briefly describe the document..."
                  className="resize-y"
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Use isSubmitting for button state */}
        <Button type="submit" disabled={isLoading || isSubmitting || !selectedFile}>
          {isSubmitting ? "Uploading..." : submitButtonText}
        </Button>
      </form>
    </Form>
  );
} 