
import React from 'react';
import SolarHeader from '@/components/SolarHeader';
import SolarDashboard from '@/components/SolarDashboard';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SolarHeader />
      <SolarDashboard />
    </div>
  );
};

export default Index;
