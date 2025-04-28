import { useContext } from 'react';
import CampaignContext from '../providers/CampaignProvider'; // Adjust path if necessary
import { Campaign } from '../providers/CampaignProvider'; // Import Campaign type

// Re-define or import the ContextType
interface CampaignContextType {
  availableCampaigns: Campaign[];
  activeCampaignId: number | null;
  isLoadingCampaigns: boolean;
  setActiveCampaign: (campaignId: number | null) => void;
}

export const useCampaign = (): CampaignContextType => {
  const context = useContext(CampaignContext);

  if (context === undefined) {
    // This error indicates the hook is used outside of the CampaignProvider
    throw new Error('useCampaign must be used within a CampaignProvider');
  }

  return context;
}; 