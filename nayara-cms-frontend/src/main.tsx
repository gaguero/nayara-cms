import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from './routes'; // Import the router
import { AuthProvider } from './providers/AuthProvider'; // Import AuthProvider
// Wrap CampaignProvider with QueryClient provider
import { CampaignProviderWithQueryClient } from './providers/CampaignProvider';
import ErrorBoundary from './components/common/ErrorBoundary'; // Import ErrorBoundary
import './styles/globals.css'; // Import global styles
import 'nprogress/nprogress.css'; // Import nprogress CSS

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Wrap the entire app structure that might throw errors */}
    <ErrorBoundary>
      <AuthProvider>
        <CampaignProviderWithQueryClient>
          <AppRouter />
        </CampaignProviderWithQueryClient>
      </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>,
); 