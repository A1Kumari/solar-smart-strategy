
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Package, 
  CheckCircle, 
  XCircle, 
  RefreshCw,
  ShoppingCart 
} from 'lucide-react';

const InventoryPlanning = () => {
  const recommendations = [
    {
      action: 'BUY NOW',
      description: 'Buy 100 units of TOPCon now (bulk deal)',
      reason: 'Limited time bulk pricing + rising trend',
      urgency: 'high',
      icon: CheckCircle
    },
    {
      action: 'AVOID',
      description: 'Avoid HJT for this setup (overpriced)',
      reason: 'Premium pricing not justified for this project scale',
      urgency: 'medium',
      icon: XCircle
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Package className="w-5 h-5 mr-2 text-blue-600" />
          Inventory Planning Panel
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-800 mb-3 flex items-center">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Recommendations:
          </h4>
          
          <div className="space-y-3">
            {recommendations.map((rec, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant={rec.action === 'BUY NOW' ? 'default' : 'destructive'}>
                    <rec.icon className="w-3 h-3 mr-1" />
                    {rec.action}
                  </Badge>
                  <Badge variant="outline" className={
                    rec.urgency === 'high' ? 'border-red-500 text-red-600' :
                    rec.urgency === 'medium' ? 'border-orange-500 text-orange-600' :
                    'border-green-500 text-green-600'
                  }>
                    {rec.urgency} urgency
                  </Badge>
                </div>
                <p className="font-medium">{rec.description}</p>
                <p className="text-sm text-gray-600">{rec.reason}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-2">
              <RefreshCw className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">
                Auto-replace future products based on dynamic suggestions
              </span>
            </div>
            <Button size="sm" variant="outline" className="text-blue-600 border-blue-600">
              Enable
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InventoryPlanning;
