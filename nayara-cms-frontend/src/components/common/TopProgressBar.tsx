import { useEffect } from 'react';
import { useNavigation } from 'react-router-dom';
import NProgress from 'nprogress';

// Optional: Configure NProgress
// NProgress.configure({ showSpinner: false });

export function TopProgressBar() {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === 'loading' || navigation.state === 'submitting') {
      NProgress.start();
    } else {
      NProgress.done();
    }

    // Ensure NProgress finishes if the component unmounts during navigation
    return () => {
      NProgress.done();
    };
  }, [navigation.state]);

  // This component doesn't render anything itself
  return null;
} 