import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define the platforms that can be selected
// TODO: Potentially move this to a config file or fetch from API if dynamic
const platforms = [
  { value: "blog", label: "Blog Post" },
  { value: "twitter", label: "Twitter" },
  { value: "facebook", label: "Facebook Post" },
  { value: "instagram", label: "Instagram Post" },
  { value: "linkedin", label: "LinkedIn Post" },
  { value: "other", label: "Other" },
];

interface PlatformSelectProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function PlatformSelect({ value, onChange, disabled }: PlatformSelectProps) {
  return (
    <Select onValueChange={onChange} value={value} disabled={disabled}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select Platform" />
      </SelectTrigger>
      <SelectContent>
        {platforms.map((platform) => (
          <SelectItem key={platform.value} value={platform.value}>
            {platform.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
} 