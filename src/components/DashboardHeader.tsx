
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, Target, Settings } from 'lucide-react';

const DashboardHeader = () => {
  return (
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
  );
};

export default DashboardHeader;
