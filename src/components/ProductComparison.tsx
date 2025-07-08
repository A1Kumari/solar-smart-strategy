
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Minus 
} from 'lucide-react';

const ProductComparison = () => {
  const comparisonData = [
    { 
      metric: 'Price/Watt', 
      current: '$0.32', 
      suggested: '$0.29', 
      improvement: 'better',
      currentValue: 70,
      suggestedValue: 85
    },
    { 
      metric: 'Efficiency', 
      current: '22%', 
      suggested: '24.5%', 
      improvement: 'better',
      currentValue: 65,
      suggestedValue: 75
    },
    { 
      metric: 'Tech Trend', 
      current: 'Stable', 
      suggested: 'Growing 🚀', 
      improvement: 'better',
      currentValue: 50,
      suggestedValue: 90
    },
    { 
      metric: 'Forecast Price (3mo)', 
      current: '↑3%', 
      suggested: '↑7%', 
      improvement: 'neutral',
      currentValue: 60,
      suggestedValue: 70
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
          Product Comparison
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="text-center p-4 bg-gray-50 rounded-lg border">
            <h3 className="font-semibold text-gray-800 mb-2">PERC - Brand A</h3>
            <Badge variant="secondary">Current Choice</Badge>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-200">
            <h3 className="font-semibold text-green-800 mb-2">TOPCon - Brand B</h3>
            <Badge className="bg-green-600">Recommended</Badge>
          </div>
        </div>

        <div className="space-y-4">
          {comparisonData.map((item, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-700">{item.metric}</span>
                <div className="flex items-center space-x-2">
                  {item.improvement === 'better' && <TrendingUp className="w-4 h-4 text-green-600" />}
                  {item.improvement === 'worse' && <TrendingDown className="w-4 h-4 text-red-600" />}
                  {item.improvement === 'neutral' && <Minus className="w-4 h-4 text-gray-600" />}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Current</span>
                    <span className="font-medium">{item.current}</span>
                  </div>
                  <Progress value={item.currentValue} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Suggested</span>
                    <span className="font-medium text-green-600">{item.suggested}</span>
                  </div>
                  <Progress value={item.suggestedValue} className="h-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductComparison;
