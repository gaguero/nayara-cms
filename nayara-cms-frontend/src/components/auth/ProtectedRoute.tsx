import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Loader2 } from 'lucide-react'; // Or your preferred loading spinner

// ProtectedRoute: Checks authentication status before rendering child routes.
// Redirects to /login if the user is not authenticated.

export function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    // Show a loading indicator while authentication status is being checked
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    // `replace` prevents the login page from being added to history
    return <Navigate to="/login" replace />;
  }

  // Render the child route (contained within the Outlet)
  return <Outlet />;
} 