import { Outlet } from 'react-router-dom';
import { TopProgressBar } from '../common/TopProgressBar';

// RootLayout: Wraps the entire application.
// Providers (Auth, Campaign, QueryClient) are applied in main.tsx,
// so this layout primarily just renders the matched child route.
// Can be expanded later for global elements like Toasts if needed.

export function RootLayout() {
  return (
    <>
      <TopProgressBar />
      <Outlet />
      {/* TODO: Add global components like Toaster here if needed */}
    </>
  );
} 