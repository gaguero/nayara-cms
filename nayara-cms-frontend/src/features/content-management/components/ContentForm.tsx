import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, ControllerRenderProps, FieldPath, FieldValues, useWatch } from "react-hook-form";
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
import { PlatformSelect } from "./PlatformSelect"; // Reusable select component
import { StatusSelect } from "./StatusSelect"; // Reusable select component
import { ContentItemDetail } from "../hooks/useContentItem"; // Type for initial data
import { MediaNeed, MediaNeedsDisplay } from "../../content-items/components/MediaNeedsDisplay"; // Import media needs components
import { MediaSelector } from "../../content-items/components/MediaSelector";

// --- Mock Media Needs --- 
// In a real app, this would come from a config or API based on contentType
const getMockMediaNeeds = (contentType: string): MediaNeed[] => {
  switch (contentType) {
    case 'facebook_post':
      return [
        { key: 'mainImage', label: 'Main Image', requiredType: 'image', minWidth: 1080, minHeight: 1080, isFulfilled: false }, // isFulfilled will be determined by form state
      ];
    case 'instagram_story':
      return [
        { key: 'storyMedia', label: 'Story Media', requiredType: 'image', minWidth: 1080, minHeight: 1920, isFulfilled: false },
      ];
    case 'blog_post':
      return [
        { key: 'featuredImage', label: 'Featured Image', requiredType: 'image', minWidth: 1200, minHeight: 630, isFulfilled: false },
        { key: 'inlineImage1', label: 'Inline Image 1 (Optional)', requiredType: 'image', isFulfilled: false }, // Example optional
      ];
    default:
      return [];
  }
};
// --- End Mock Media Needs ---

// Define the validation schema using Zod
const contentFormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }).max(100, {
    message: "Title cannot be longer than 100 characters.",
  }),
  body: z.string().min(10, {
    message: "Body must be at least 10 characters.",
  }),
  contentType: z.string({
    required_error: "Please select a content type/platform.",
  }),
  status: z.string({
    required_error: "Please select a status.",
  }),
  mediaUrl: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),
  // Add state for selected media items, mapping need key to media ID
  selectedMedia: z.record(z.string(), z.string().nullable()).optional(), 
  // Add other fields as needed based on backend DTOs
});

type ContentFormValues = z.infer<typeof contentFormSchema>;

interface ContentFormProps {
  onSubmit: (values: ContentFormValues) => void;
  initialData?: ContentItemDetail | null; // For pre-populating the form in edit mode
  isLoading?: boolean; // To disable form during submission
  submitButtonText?: string;
}

export function ContentForm({
  onSubmit,
  initialData,
  isLoading = false,
  submitButtonText = "Submit",
}: ContentFormProps) {
  // Initialize the form using react-hook-form and Zod resolver
  const form = useForm<ContentFormValues>({
    resolver: zodResolver(contentFormSchema),
    defaultValues: {
      title: initialData?.title || "",
      body: initialData?.body || "",
      contentType: initialData?.contentType || "", // Ensure a default or handle empty string
      status: initialData?.status || "draft", // Default to draft status
      mediaUrl: initialData?.mediaUrl || "",
      selectedMedia: initialData?.selectedMedia || {}, // Initialize selectedMedia
    },
    mode: "onChange", // Validate on change for better UX
  });

  // Watch the contentType field to dynamically determine media needs
  const watchedContentType = useWatch({ control: form.control, name: 'contentType' });
  const currentMediaNeeds = getMockMediaNeeds(watchedContentType);

  // Function to update selected media in the form state
  const handleMediaSelection = (mediaNeedKey: string, selectedMediaId: string | null) => {
      const currentSelected = form.getValues('selectedMedia') || {};
      form.setValue('selectedMedia', { 
          ...currentSelected,
          [mediaNeedKey]: selectedMediaId,
      }, { shouldValidate: true, shouldDirty: true }); // Trigger validation/dirty state
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Title Field */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }: { field: ControllerRenderProps<ContentFormValues, 'title'> }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter content title" {...field} disabled={isLoading} />
              </FormControl>
              <FormDescription>
                A concise and descriptive title for your content.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Content Type/Platform Field */}
        <FormField
          control={form.control}
          name="contentType"
          render={({ field }: { field: ControllerRenderProps<ContentFormValues, 'contentType'> }) => (
            <FormItem>
              <FormLabel>Platform / Type</FormLabel>
              <FormControl>
                {/* Using the custom select component */}
                <PlatformSelect 
                  onChange={field.onChange} 
                  value={field.value}
                  disabled={isLoading} 
                />
              </FormControl>
              <FormDescription>
                Select the target platform or type of content.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Body Field */}
        <FormField
          control={form.control}
          name="body"
          render={({ field }: { field: ControllerRenderProps<ContentFormValues, 'body'> }) => (
            <FormItem>
              <FormLabel>Body</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter the main content body..."
                  className="resize-y min-h-[150px]"
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormDescription>
                The main text content.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Status Field */}
        <FormField
          control={form.control}
          name="status"
          render={({ field }: { field: ControllerRenderProps<ContentFormValues, 'status'> }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <StatusSelect 
                  onChange={field.onChange} 
                  value={field.value} 
                  disabled={isLoading} 
                />
              </FormControl>
              <FormDescription>
                Set the current status of the content item.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Media URL Field (Optional) */}
        <FormField
          control={form.control}
          name="mediaUrl"
          render={({ field }: { field: ControllerRenderProps<ContentFormValues, 'mediaUrl'> }) => (
            <FormItem>
              <FormLabel>Media URL (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/image.jpg" {...field} disabled={isLoading} />
              </FormControl>
              <FormDescription>
                Link to an associated image or video (if applicable).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* --- Media Requirements Section --- */}
        {currentMediaNeeds.length > 0 && (
          <div className="space-y-4 pt-4 border-t">
            <h3 className="text-lg font-medium">Media Assets</h3>
            {/* Display Needs Overview */}
            <MediaNeedsDisplay 
              needs={currentMediaNeeds.map(need => ({ 
                ...need, 
                isFulfilled: !!form.watch('selectedMedia')?.[need.key] // Check fulfillment based on form state
              }))} 
            />

            {/* Render Selector for Each Need */}
            {currentMediaNeeds.map((need) => (
              <MediaSelector
                key={need.key}
                mediaNeed={{
                    ...need,
                    isFulfilled: !!form.watch('selectedMedia')?.[need.key] // Pass fulfillment status
                }}
                selectedMediaId={form.watch('selectedMedia')?.[need.key]}
                onMediaSelect={handleMediaSelection}
              />
            ))}
          </div>
        )}
        {/* --- End Media Requirements Section --- */}

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : submitButtonText}
        </Button>
      </form>
    </Form>
  );
} 