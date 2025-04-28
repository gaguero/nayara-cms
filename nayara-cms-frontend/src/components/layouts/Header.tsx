import { Link } from 'react-router-dom';
import { CampaignSelector } from '../campaign/CampaignSelector';
import { UserNav } from '../auth/UserNav';
import { Bird } from 'lucide-react'; // Example logo icon

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Left Side: Logo/Title */}
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <Bird className="h-6 w-6" />
            <span className="font-bold sm:inline-block">
              Nayara CMS
            </span>
          </Link>
        </div>

        {/* Middle: Maybe global search or main nav if needed */}
        <div className="flex flex-1 items-center justify-center space-x-2 md:justify-center">
          {/* Placeholder for future elements */}
        </div>

        {/* Right Side: Campaign Selector & User Nav */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <CampaignSelector />
          <UserNav />
        </div>
      </div>
    </header>
  );
} 