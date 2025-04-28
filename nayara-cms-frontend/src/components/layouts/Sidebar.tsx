import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils"; // Assuming Shadcn's utility function for classnames
import { buttonVariants } from "@/components/ui/button";
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  Image as ImageIcon,
  // Add more icons as needed (e.g., Settings, Users)
} from 'lucide-react';

const navItems = [
  { href: '/', title: 'Dashboard', icon: LayoutDashboard },
  { href: '/content', title: 'Content', icon: FileText }, // Placeholder path
  { href: '/planning-library', title: 'Planning Library', icon: BookOpen }, // Placeholder path
  { href: '/media-library', title: 'Media Library', icon: ImageIcon }, // Placeholder path
  // Add other items like Settings, User Management later
];

export function Sidebar({ className }: { className?: string }) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
    >
      {navItems.map((item) => {
        // Basic active check: exact match or starts with for nested routes
        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              buttonVariants({ variant: isActive ? "secondary" : "ghost" }),
              isActive
                ? "justify-start"
                : "justify-start",
              "w-full" // Ensure full width in vertical layout
            )}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
} 