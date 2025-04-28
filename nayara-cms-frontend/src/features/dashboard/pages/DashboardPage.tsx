import React from 'react';
// import { useAuth } from '@/features/auth/hooks/useAuth';
// import { useCampaign } from '@/features/campaigns/hooks/useCampaign';
import { useAuth } from '@/hooks/useAuth';
import { useCampaign } from '@/hooks/useCampaign';
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api'; // Assuming apiClient is here
import { useMemo } from 'react'; // Import useMemo
// Import Skeleton component
import { Skeleton } from "@/components/ui/skeleton"
// Import Card components
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// Import Alert components
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Define the expected data structure from the backend
interface DashboardSummary {
  contentItemCount: number;
  pendingMediaNeedsCount: number;
}

// Function to fetch dashboard data
const fetchDashboardSummary = async (campaignId: number): Promise<DashboardSummary> => {
  const response = await apiClient.get<{ data: DashboardSummary }>( // Adjust based on actual backend response wrapper
    `/api/v1/campaigns/${campaignId}/dashboard-summary`
  );
  // Adjust data access based on backend response (e.g., response.data.data or just response.data)
  return response.data.data || response.data; 
};

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  // Get availableCampaigns from useCampaign
  const { activeCampaignId, availableCampaigns, isLoadingCampaigns } = useCampaign(); 

  // Derive activeCampaign object using useMemo
  const activeCampaign = useMemo(() => {
    return availableCampaigns.find(c => c.id === activeCampaignId);
  }, [availableCampaigns, activeCampaignId]);

  const { 
    data: dashboardData,
    // Combine isLoadingCampaigns with useQuery's isLoading
    isLoading: isLoadingQueryData,
    isError,
    error
  } = useQuery<DashboardSummary, Error>({ 
    queryKey: ['dashboardSummary', activeCampaignId],
    queryFn: () => {
      if (!activeCampaignId) {
        return Promise.reject(new Error('No active campaign selected'));
      }
      return fetchDashboardSummary(activeCampaignId);
    },
    enabled: !!activeCampaignId && !isLoadingCampaigns, // Also ensure campaigns have loaded
    staleTime: 5 * 60 * 1000, 
    refetchOnWindowFocus: false,
  });
  
  // Consolidated loading state
  const isLoading = isLoadingCampaigns || isLoadingQueryData;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {/* Display user email instead of username */}
      <p>Welcome, {user?.email}!</p> 
      <p className="mb-4">Active Campaign: {activeCampaign ? activeCampaign.name : 'None selected'}</p>

      {/* Loading State Implementation */}
      {isLoading && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
          {/* Add more skeletons if more cards are planned */}
          {/* <Skeleton className="h-24 w-full" /> */}
          {/* <Skeleton className="h-24 w-full" /> */}
        </div>
      )}

      {/* Error Handling Implementation */}
      {isError && error?.message !== 'No active campaign selected' && (
        <Alert variant="destructive" className="mt-4"> 
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Failed to load dashboard data: {error?.message}
          </AlertDescription>
        </Alert>
      )}

      {/* TODO: Implement Data Display (Subtask 9.2) */}
      {dashboardData && !isLoading && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Items</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{dashboardData.contentItemCount}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pending Media Needs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{dashboardData.pendingMediaNeedsCount}</p>
            </CardContent>
          </Card>
          {/* Add more cards here if needed */}
        </div>
      )}
      
      {/* No Campaign Selected Message */} 
      {!activeCampaignId && !isLoading && !isError && (
          <p className="mt-4 text-muted-foreground">Please select a campaign to view the dashboard.</p>
      )}

    </div>
  );
};

export default DashboardPage; 