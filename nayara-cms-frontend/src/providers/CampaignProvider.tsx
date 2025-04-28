import React, {
  createContext,
  useState,
  ReactNode,
  useMemo,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { apiClient } from '../lib/api'; // Assuming apiClient is set up
import { useAuth } from '../hooks/useAuth';

// --- LocalStorage Key ---
const ACTIVE_CAMPAIGN_ID_KEY = 'activeCampaignId';

// --- Interfaces ---
export interface Campaign {
  id: number;
  name: string;
  // Add other fields returned by the /campaigns endpoint if needed
}

interface CampaignContextType {
  availableCampaigns: Campaign[];
  activeCampaignId: number | null;
  isLoadingCampaigns: boolean;
  setActiveCampaign: (campaignId: number | null) => void;
}

interface CampaignProviderProps {
  children: ReactNode;
}

// --- Context Creation ---
const CampaignContext = createContext<CampaignContextType | undefined>(
  undefined,
);

// --- Helper to get initial ID from localStorage ---
const getInitialActiveCampaignId = (): number | null => {
  const storedId = localStorage.getItem(ACTIVE_CAMPAIGN_ID_KEY);
  return storedId ? (parseInt(storedId, 10) || null) : null;
};

// --- React Query Client (Should ideally be defined once at app root) ---
const queryClient = new QueryClient();

// --- Campaign Provider Component Wrapper for QueryClient ---
export const CampaignProviderWithQueryClient: React.FC<CampaignProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CampaignProvider>{children}</CampaignProvider>
    </QueryClientProvider>
  );
};

// --- Main Campaign Provider Logic ---
const CampaignProvider: React.FC<CampaignProviderProps> = ({ children }) => {
  const { isAuthenticated, isLoading: isAuthLoading } = useAuth(); // Get auth state
  const [availableCampaigns, setAvailableCampaigns] = useState<Campaign[]>([]);
  const [activeCampaignId, setActiveCampaignIdState] = useState<number | null>(
    getInitialActiveCampaignId,
  );
  // Tracks loading state *before* the first successful/failed fetch
  const [isInitialLoadPending, setIsInitialLoadPending] = useState(true);

  // Query function separate for clarity
  const fetchCampaigns = async (): Promise<Campaign[]> => {
    console.log('RQ: Fetching campaigns...');
    // Assuming backend endpoint is /campaigns and returns { campaigns: Campaign[] }
    // Adjust if your backend structure is different
    const response = await apiClient.get<{ campaigns: Campaign[] }>('/campaigns');
    return response.data.campaigns || [];
  };

  const { data: fetchedCampaigns, isLoading: isLoadingQuery, isSuccess, isError, error: queryError } = useQuery<Campaign[], Error>(
    {
        queryKey: ['campaigns'],
        queryFn: fetchCampaigns,
        enabled: isAuthenticated && !isAuthLoading, // Only run when logged in
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000,
        retry: 1, // Retry once on error
    }
  );

  // --- Effect for Handling Successful Fetch ---
  useEffect(() => {
    if (isSuccess && fetchedCampaigns) {
      console.log('RQ: Success. Campaigns:', fetchedCampaigns);
      setAvailableCampaigns(fetchedCampaigns);

      // Validate or set default active campaign ID
      const currentActiveId = getInitialActiveCampaignId(); // Re-read from storage
      const isValidActiveId = fetchedCampaigns.some(c => c.id === currentActiveId);

      if (isValidActiveId) {
        // If stored ID is valid, ensure state reflects it (might be redundant but safe)
        if (activeCampaignId !== currentActiveId) {
            setActiveCampaignIdState(currentActiveId);
        }
      } else if (fetchedCampaigns.length > 0) {
        // If stored ID is invalid/null, set to first available campaign
        console.log('RQ: Setting default active campaign:', fetchedCampaigns[0].id);
        setActiveCampaign(fetchedCampaigns[0].id); // Use setter to update state & localStorage
      } else {
        // No campaigns available
        console.log('RQ: No campaigns available, clearing active ID.');
        setActiveCampaign(null); // Use setter to update state & localStorage
      }

      if (isInitialLoadPending) setIsInitialLoadPending(false);
    }
  }, [isSuccess, fetchedCampaigns]); // Dependencies for success handling

  // --- Effect for Handling Fetch Error ---
  useEffect(() => {
    if (isError && queryError) {
      console.error('RQ: Failed to fetch campaigns:', queryError.message);
      setAvailableCampaigns([]);
      setActiveCampaign(null); // Clear active campaign on error
      if (isInitialLoadPending) setIsInitialLoadPending(false);
    }
  }, [isError, queryError]); // Dependencies for error handling

  // --- Loading State Calculation ---
  // Loading is true if initial auth is happening OR initial campaign fetch is pending OR react-query is actively fetching
  const isLoadingCampaigns = isAuthLoading || isInitialLoadPending || isLoadingQuery;

  // Function to set the active campaign and persist it
  const setActiveCampaign = useCallback((campaignId: number | null) => {
    setActiveCampaignIdState(campaignId);
    if (campaignId !== null) {
      localStorage.setItem(ACTIVE_CAMPAIGN_ID_KEY, campaignId.toString());
    } else {
      localStorage.removeItem(ACTIVE_CAMPAIGN_ID_KEY);
    }
  }, []);

  // Context value
  const value = useMemo(
    () => ({
      availableCampaigns,
      activeCampaignId,
      isLoadingCampaigns,
      setActiveCampaign,
    }),
    [availableCampaigns, activeCampaignId, isLoadingCampaigns, setActiveCampaign],
  );

  return (
    <CampaignContext.Provider value={value}>
      {children}
    </CampaignContext.Provider>
  );
};

// --- Custom Hook --- (Moved to Subtask 7.4)
export const useCampaign = (): CampaignContextType => {
  const context = useContext(CampaignContext);
  if (!context) {
    throw new Error('useCampaign must be used within a CampaignProvider');
  }
  return context;
};

export default CampaignProvider; 