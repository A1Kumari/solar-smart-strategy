
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Zap,
  Sun,
  Factory,
  ShoppingCart,
  BarChart3,
  Target,
  Globe,
  Calendar
} from 'lucide-react';

const SolarDashboard = () => {
  // Mock data for demonstrations
  const marketMetrics = [
    { title: 'Avg Panel Price', value: '$0.42', change: '-3.2%', trend: 'down', icon: TrendingDown },
    { title: 'Market Volume', value: '2.4M', change: '+12.8%', trend: 'up', icon: TrendingUp },
    { title: 'Polysilicon Cost', value: '$18.50', change: '+2.1%', trend: 'up', icon: Factory },
    { title: 'Supply Confidence', value: '78%', change: '+5.0%', trend: 'up', icon: CheckCircle }
  ];

  const priceData = [
    { month: 'Jan', price: 0.45, forecast: null },
    { month: 'Feb', price: 0.43, forecast: null },
    { month: 'Mar', price: 0.44, forecast: null },
    { month: 'Apr', price: 0.42, forecast: null },
    { month: 'May', price: null, forecast: 0.41 },
    { month: 'Jun', price: null, forecast: 0.40 },
    { month: 'Jul', price: null, forecast: 0.39 }
  ];

  const technologyData = [
    { name: 'PERC', market_share: 45, momentum: 'declining', color: '#0ea5e9' },
    { name: 'TOPCon', market_share: 35, momentum: 'rising', color: '#f59e0b' },
    { name: 'HJT', market_share: 15, momentum: 'stable', color: '#10b981' },
    { name: 'Other', market_share: 5, momentum: 'declining', color: '#94a3b8' }
  ];

  const rawMaterialData = [
    { material: 'Polysilicon', price: 18.5, impact: 'High', change: 2.1 },
    { material: 'Silver', price: 24.2, impact: 'Medium', change: -1.5 },
    { material: 'Aluminum', price: 2.1, impact: 'Low', change: 0.8 },
    { material: 'Copper', price: 8.4, impact: 'Medium', change: 1.2 }
  ];

  const procurementRecommendations = [
    {
      action: 'BUY NOW',
      product: 'TOPCon 550W Panels',
      confidence: 92,
      reason: 'Technology momentum + favorable pricing window',
      urgency: 'high'
    },
    {
      action: 'WAIT',
      product: 'PERC 450W Panels',
      confidence: 85,
      reason: 'Expected 5-8% price drop in Q2',
      urgency: 'low'
    },
    {
      action: 'MONITOR',
      product: 'HJT Premium Panels',
      confidence: 78,
      reason: 'Supply chain stabilizing, prices volatile',
      urgency: 'medium'
    }
  ];

  const alerts = [
    { type: 'price', message: 'Polysilicon prices up 15% this week', severity: 'high' },
    { type: 'supply', message: 'New TOPCon factory capacity coming online', severity: 'medium' },
    { type: 'policy', message: 'EU solar tariff changes proposed', severity: 'medium' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Solar Market Intelligence
            </h1>
            <p className="text-gray-600 mt-2">Real-time insights for strategic procurement decisions</p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="text-green-600 border-green-600">
              <Clock className="w-4 h-4 mr-1" />
              Live Data
            </Badge>
            <Button className="solar-gradient text-white">
              <Target className="w-4 h-4 mr-2" />
              Set Alerts
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {marketMetrics.map((metric, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                    <div className={`flex items-center mt-1 ${
                      metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <metric.icon className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">{metric.change}</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full ${
                    metric.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <metric.icon className={`w-6 h-6 ${
                      metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="technology">Technology</TabsTrigger>
            <TabsTrigger value="materials">Materials</TabsTrigger>
            <TabsTrigger value="recommendations">Procurement</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Price Trends Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                    Price Trends & Forecast
                  </CardTitle>
                  <CardDescription>Historical prices with 3-month forecast</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={priceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="price" 
                        stroke="#0ea5e9" 
                        strokeWidth={3}
                        name="Historical Price"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="forecast" 
                        stroke="#f59e0b" 
                        strokeWidth={3}
                        strokeDasharray="5 5"
                        name="Forecast"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Market Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
                    Market Alerts
                  </CardTitle>
                  <CardDescription>Critical updates affecting procurement</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {alerts.map((alert, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        alert.severity === 'high' ? 'bg-red-500' : 
                        alert.severity === 'medium' ? 'bg-orange-500' : 'bg-green-500'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{alert.message}</p>
                        <p className="text-xs text-gray-500 capitalize">{alert.type} alert</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-4">
                    View All Alerts
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Detailed Price Analysis</CardTitle>
                <CardDescription>Comprehensive pricing trends across panel types</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={priceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="price" 
                      stroke="#0ea5e9" 
                      fill="url(#colorPrice)" 
                    />
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="technology" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-blue-600" />
                    Technology Market Share
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={technologyData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({name, market_share}) => `${name}: ${market_share}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="market_share"
                      >
                        {technologyData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Technology Momentum</CardTitle>
                  <CardDescription>Market adoption trends</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {technologyData.map((tech, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{tech.name}</span>
                        <Badge variant={
                          tech.momentum === 'rising' ? 'default' : 
                          tech.momentum === 'stable' ? 'secondary' : 'destructive'
                        }>
                          {tech.momentum}
                        </Badge>
                      </div>
                      <Progress value={tech.market_share} className="h-2" />
                      <p className="text-sm text-gray-600">{tech.market_share}% market share</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="materials" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Factory className="w-5 h-5 mr-2 text-blue-600" />
                  Raw Material Impact
                </CardTitle>
                <CardDescription>How material costs affect panel pricing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {rawMaterialData.map((material, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium">{material.material}</h3>
                        <p className="text-sm text-gray-600">Impact: {material.impact}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold">${material.price}/kg</p>
                        <p className={`text-sm ${material.change > 0 ? 'text-red-600' : 'text-green-600'}`}>
                          {material.change > 0 ? '+' : ''}{material.change}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-blue-600" />
                  AI-Powered Procurement Recommendations
                </CardTitle>
                <CardDescription>Data-driven insights for optimal buying decisions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {procurementRecommendations.map((rec, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant={
                        rec.action === 'BUY NOW' ? 'default' :
                        rec.action === 'WAIT' ? 'secondary' : 'outline'
                      } className="text-sm font-medium">
                        {rec.action}
                      </Badge>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Confidence:</span>
                        <span className="font-bold text-blue-600">{rec.confidence}%</span>
                      </div>
                    </div>
                    <h3 className="font-medium text-lg">{rec.product}</h3>
                    <p className="text-gray-600">{rec.reason}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className={
                        rec.urgency === 'high' ? 'border-red-500 text-red-600' :
                        rec.urgency === 'medium' ? 'border-orange-500 text-orange-600' :
                        'border-green-500 text-green-600'
                      }>
                        {rec.urgency} urgency
                      </Badge>
                      <Button size="sm" variant="outline">
                        Get Quote
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SolarDashboard;
