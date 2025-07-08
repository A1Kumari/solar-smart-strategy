
import React from 'react';
import DashboardHeader from './DashboardHeader';
import ProjectOverview from './ProjectOverview';
import ProductComparison from './ProductComparison';
import InventoryPlanning from './InventoryPlanning';
import MarketIntelligence from './MarketIntelligence';

const SolarDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <DashboardHeader />

        {/* Main Content */}
        <div className="space-y-6">
          <ProjectOverview />
          <ProductComparison />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <InventoryPlanning />
            <MarketIntelligence />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarDashboard;
