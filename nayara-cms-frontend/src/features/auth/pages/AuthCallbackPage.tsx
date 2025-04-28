import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react'; // Or your preferred loading component

// TODO: Expand this component if external OAuth providers (e.g., Google, GitHub)
// are implemented. It currently assumes no external callback processing is needed.

export function AuthCallbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Since there's no external provider callback to handle currently,
    // redirect immediately. This might redirect to home ('/') or login ('/login')
    // depending on application flow.
    // For now, redirecting to home as a logged-in user shouldn't land here anyway.
    console.log('AuthCallbackPage reached, redirecting...');
    navigate('/', { replace: true });
  }, [navigate]);

  return (
    <div className="flex h-screen items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin" />
      <p className="ml-2">Processing...</p> {/* Basic loading indicator */}
    </div>
  );
} 