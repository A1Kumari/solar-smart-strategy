
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, Target, Settings } from 'lucide-react';
import ProjectOverview from './ProjectOverview';
import ProductComparison from './ProductComparison';
import InventoryPlanning from './InventoryPlanning';
import MarketIntelligence from './MarketIntelligence';

const SolarDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Smart Procurement Advisor
            </h1>
            <p className="text-gray-600 mt-1">AI-powered product recommendations for your solar projects</p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="text-green-600 border-green-600">
              <RefreshCw className="w-3 h-3 mr-1" />
              Live Analysis
            </Badge>
            <Button size="sm" variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Project Settings
            </Button>
            <Button className="solar-gradient text-white">
              <Target className="w-4 h-4 mr-2" />
              Accept Suggestion
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Project Overview */}
          <ProjectOverview />

          {/* Product Comparison */}
          <ProductComparison />

          {/* Bottom Row */}
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
