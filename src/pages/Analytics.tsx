
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, AreaChart, Area } from 'recharts';

const productCategoryData = [
  { name: 'Fruits', value: 45, color: '#3b82f6' },
  { name: 'Vegetables', value: 30, color: '#10b981' },
  { name: 'Spices', value: 15, color: '#f59e0b' },
  { name: 'Grains', value: 10, color: '#ef4444' },
];

const conversionData = [
  { stage: 'Visitors', count: 12489, conversion: 100 },
  { stage: 'Inquiries', count: 3247, conversion: 26 },
  { stage: 'Negotiations', count: 891, conversion: 7.1 },
  { stage: 'Closed Deals', count: 234, conversion: 1.9 },
];

// User Behavior Data
const userActivityData = [
  { hour: '00:00', exporters: 12, importers: 8 },
  { hour: '04:00', exporters: 18, importers: 15 },
  { hour: '08:00', exporters: 45, importers: 38 },
  { hour: '12:00', exporters: 78, importers: 62 },
  { hour: '16:00', exporters: 89, importers: 71 },
  { hour: '20:00', exporters: 56, importers: 44 },
];

const sessionDurationData = [
  { duration: '0-2min', users: 234 },
  { duration: '2-5min', users: 456 },
  { duration: '5-10min', users: 789 },
  { duration: '10-20min', users: 567 },
  { duration: '20+min', users: 345 },
];

// Product Analytics Data
const productPerformanceData = [
  { category: 'Fruits', views: 12450, inquiries: 1240, conversions: 124 },
  { category: 'Vegetables', views: 9870, inquiries: 987, conversions: 98 },
  { category: 'Spices', views: 7650, inquiries: 765, conversions: 76 },
  { category: 'Grains', views: 5430, inquiries: 543, conversions: 54 },
];

const topProductsData = [
  { name: 'Premium Basmati Rice', views: 2340, price: '$2.50/kg' },
  { name: 'Organic Turmeric Powder', views: 1890, price: '$4.20/kg' },
  { name: 'Fresh Alphonso Mangoes', views: 1560, price: '$3.80/kg' },
  { name: 'Red Chili Powder', views: 1240, price: '$5.60/kg' },
  { name: 'Cashew Nuts', views: 980, price: '$12.40/kg' },
];

// Revenue Analytics Data
const monthlyRevenueData = [
  { month: 'Jan', subscriptions: 15000, products: 12000, slots: 8000, total: 35000 },
  { month: 'Feb', subscriptions: 18000, products: 14000, slots: 9500, total: 41500 },
  { month: 'Mar', subscriptions: 22000, products: 16000, slots: 11000, total: 49000 },
  { month: 'Apr', subscriptions: 25000, products: 18000, slots: 13000, total: 56000 },
  { month: 'May', subscriptions: 28000, products: 20000, slots: 15000, total: 63000 },
  { month: 'Jun', subscriptions: 32000, products: 22000, slots: 17000, total: 71000 },
];

const revenueBreakdownData = [
  { source: 'Premium Subscriptions', amount: 32000, percentage: 45.1 },
  { source: 'Product Listings', amount: 22000, percentage: 31.0 },
  { source: 'Slot Purchases', amount: 17000, percentage: 23.9 },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Advanced Analytics</h1>
        <p className="text-muted-foreground">
          Deep insights into platform performance and user behavior
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">User Behavior</TabsTrigger>
          <TabsTrigger value="products">Product Analytics</TabsTrigger>
          <TabsTrigger value="revenue">Revenue Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Product Categories Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={productCategoryData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {productCategoryData.map((entry, index) => (
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
                <CardTitle>Conversion Funnel</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={conversionData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="stage" type="category" width={100} />
                    <Tooltip />
                    <Bar dataKey="count" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>User Activity by Hour</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={userActivityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="exporters" stroke="#3b82f6" strokeWidth={2} />
                    <Line type="monotone" dataKey="importers" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Session Duration Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={sessionDurationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="duration" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="users" fill="#8884d8" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>User Engagement Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">2.4m</div>
                  <div className="text-sm text-muted-foreground">Page Views</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">8:32</div>
                  <div className="text-sm text-muted-foreground">Avg Session</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">34%</div>
                  <div className="text-sm text-muted-foreground">Bounce Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">156</div>
                  <div className="text-sm text-muted-foreground">Daily Active Users</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Product Performance by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={productPerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="views" fill="#3b82f6" name="Views" />
                    <Bar dataKey="inquiries" fill="#10b981" name="Inquiries" />
                    <Bar dataKey="conversions" fill="#f59e0b" name="Conversions" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Performing Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProductsData.map((product, index) => (
                    <div key={product.name} className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-muted-foreground">{product.views} views</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{product.price}</div>
                        <div className="text-sm text-muted-foreground">#{index + 1}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Product Metrics Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">1,247</div>
                  <div className="text-sm text-muted-foreground">Total Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">86%</div>
                  <div className="text-sm text-muted-foreground">Active Listings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">3.2%</div>
                  <div className="text-sm text-muted-foreground">Conversion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">$2.4K</div>
                  <div className="text-sm text-muted-foreground">Avg Order Value</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={monthlyRevenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="subscriptions" stackId="1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="products" stackId="1" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="slots" stackId="1" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={revenueBreakdownData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="amount"
                      label={({ source, percentage }) => `${source}: ${percentage}%`}
                    >
                      {revenueBreakdownData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#3b82f6', '#10b981', '#f59e0b'][index]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">$71,000</div>
                    <div className="text-sm text-muted-foreground">Total Monthly Revenue</div>
                  </div>
                  <div className="space-y-4">
                    {revenueBreakdownData.map((item) => (
                      <div key={item.source} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{item.source}</span>
                        <span className="text-sm text-muted-foreground">${item.amount.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Growth Rate</span>
                      <span className="text-sm text-green-600">+12.5%</span>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-sm font-medium">Projected Next Month</span>
                      <span className="text-sm font-medium">$79,875</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
