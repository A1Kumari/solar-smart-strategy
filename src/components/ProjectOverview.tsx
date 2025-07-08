
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight 
} from 'lucide-react';

const ProjectOverview = () => {
  return (
    <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-white">
      <CardHeader>
        <CardTitle className="flex items-center text-blue-800">
          <MapPin className="w-5 h-5 mr-2" />
          Project Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-semibold text-gray-800">Project: "ABC Tower Rooftop Setup"</p>
            <p className="text-gray-600">Capacity: 500 kW | Location: Mumbai</p>
            <p className="text-gray-600">Procurement Stage: Panel Selection</p>
          </div>
        </div>
        
        <div className="border-t pt-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <span className="font-medium">Current Choice: PERC Panel by Brand A</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg border border-green-200">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-medium text-green-800">Suggestion: Switch to TOPCon by Brand B</span>
            </div>
            <ArrowRight className="w-4 h-4 text-green-600" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
            <Badge variant="outline" className="text-green-600 border-green-600 justify-center">
              <CheckCircle className="w-3 h-3 mr-1" />
              7% cheaper
            </Badge>
            <Badge variant="outline" className="text-blue-600 border-blue-600 justify-center">
              <Zap className="w-3 h-3 mr-1" />
              2.5% more efficient
            </Badge>
            <Badge variant="outline" className="text-orange-600 border-orange-600 justify-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              Price rising → Buy Now
            </Badge>
            <Badge variant="outline" className="text-green-600 border-green-600 justify-center">
              <CheckCircle className="w-3 h-3 mr-1" />
              In stock locally
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectOverview;
