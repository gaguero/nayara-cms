import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Toaster } from "@/components/ui/sonner";

// AppLayout: The main layout structure for authenticated pages,
// combining the Header, Sidebar, and the main content area (Outlet).

export function AppLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="flex flex-1">
        {/* Sidebar - adjust width (w-64) and breakpoints as needed */}
        <aside className="hidden w-64 flex-col border-r bg-background p-4 lg:flex">
          <Sidebar />
        </aside>
        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <Outlet /> {/* Child routes render here */}
        </main>
      </div>
      <Toaster />
    </div>
  );
} 