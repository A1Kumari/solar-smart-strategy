
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  TrendingUp, 
  TrendingDown, 
  Minus,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const MarketIntelligence = () => {
  const techMomentum = [
    { tech: 'TOPCon', trend: 'up', momentum: 85, color: 'text-green-600' },
    { tech: 'HJT', trend: 'up', momentum: 70, color: 'text-blue-600' },
    { tech: 'PERC', trend: 'down', momentum: 40, color: 'text-red-600' }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="w-5 h-5 mr-2 text-blue-600" />
          Market Intelligence Dashboard
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Material Cost Index</span>
              <div className="flex items-center space-x-1">
                <span className="font-bold">105.95</span>
                <Badge variant="outline" className="text-red-600 border-red-600">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +4.3%
                </Badge>
              </div>
            </div>
            <Progress value={75} className="h-2" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Risk Level</span>
              <Badge variant="outline" className="text-green-600 border-green-600">
                <CheckCircle className="w-3 h-3 mr-1" />
                Low - Good time to stock
              </Badge>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-800 mb-3">Tech Momentum</h4>
          <div className="space-y-2">
            {techMomentum.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{item.tech}</span>
                  {item.trend === 'up' && <TrendingUp className={`w-4 h-4 ${item.color}`} />}
                  {item.trend === 'down' && <TrendingDown className={`w-4 h-4 ${item.color}`} />}
                  {item.trend === 'stable' && <Minus className={`w-4 h-4 ${item.color}`} />}
                </div>
                <div className="flex items-center space-x-2 w-32">
                  <Progress value={item.momentum} className="h-2" />
                  <span className={`text-sm font-medium ${item.color}`}>
                    {item.momentum}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t pt-4">
          <h4 className="font-medium text-gray-800 mb-2">Market Events</h4>
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <div className="flex items-start space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-green-800">New subsidy on TOPCon panels</p>
                <p className="text-xs text-green-600">Government incentive active until Q2 2024</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketIntelligence;
