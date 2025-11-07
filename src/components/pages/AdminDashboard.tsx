import { Header } from "../Header";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Users, MapPin, Eye, TrendingUp } from "lucide-react";

interface AdminDashboardProps {
  onNavigate: (page: string) => void;
}

const monthlyVisitors = [
  { month: 'May', visitors: 4200 },
  { month: 'Jun', visitors: 5800 },
  { month: 'Jul', visitors: 7100 },
  { month: 'Aug', visitors: 6900 },
  { month: 'Sep', visitors: 5200 },
  { month: 'Oct', visitors: 4800 },
];

const popularDestinations = [
  { name: 'Charyn Canyon', visits: 3421 },
  { name: 'Kolsai Lakes', visits: 2890 },
  { name: 'Almaty City', visits: 2654 },
  { name: 'Big Almaty Lake', visits: 2103 },
  { name: 'Altyn Emel', visits: 1876 },
];

const userDemographics = [
  { name: 'International', value: 45, color: '#0A4B78' },
  { name: 'Domestic', value: 35, color: '#2D5016' },
  { name: 'Budget Travelers', value: 20, color: '#D4B896' },
];

export function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn isAdmin onNavigate={onNavigate} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Overview of Tourism Kazakhstan platform analytics</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">Total Users</CardTitle>
              <Users className="w-4 h-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">12,483</div>
              <p className="text-xs text-green-600 mt-1">+15.3% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">Total Attractions</CardTitle>
              <MapPin className="w-4 h-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">248</div>
              <p className="text-xs text-green-600 mt-1">+8 new this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">Page Views</CardTitle>
              <Eye className="w-4 h-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">89,342</div>
              <p className="text-xs text-green-600 mt-1">+22.5% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">Avg. Session</CardTitle>
              <TrendingUp className="w-4 h-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">4m 32s</div>
              <p className="text-xs text-green-600 mt-1">+8% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Visitor Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Visitor Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyVisitors}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="visitors" 
                    stroke="#0A4B78" 
                    strokeWidth={2}
                    name="Unique Visitors"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* User Demographics */}
          <Card>
            <CardHeader>
              <CardTitle>User Demographics</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={userDemographics}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {userDemographics.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Popular Destinations */}
        <Card>
          <CardHeader>
            <CardTitle>Most Popular Destinations</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={popularDestinations}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="visits" fill="#0A4B78" name="Page Views" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <Card 
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onNavigate('admin-attractions')}
          >
            <CardContent className="pt-6 text-center">
              <MapPin className="w-12 h-12 mx-auto mb-3 text-[#0A4B78]" />
              <h3 className="mb-2">Manage Attractions</h3>
              <p className="text-sm text-gray-600">Add, edit, or remove destinations</p>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onNavigate('admin-reviews')}
          >
            <CardContent className="pt-6 text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-3 text-[#0A4B78]" />
              <h3 className="mb-2">Moderate Reviews</h3>
              <p className="text-sm text-gray-600">Approve or deny user reviews</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-3 text-[#0A4B78]" />
              <h3 className="mb-2">User Management</h3>
              <p className="text-sm text-gray-600">View and manage user accounts</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
