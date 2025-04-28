import React from 'react';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useCampaign } from '@/features/campaigns/hooks/useCampaign';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { activeCampaign } = useCampaign();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {/* Content will go here */}
      <p>Welcome, {user?.username}!</p>
      <p>Active Campaign: {activeCampaign ? activeCampaign.name : 'None selected'}</p>
    </div>
  );
};

export default DashboardPage; 