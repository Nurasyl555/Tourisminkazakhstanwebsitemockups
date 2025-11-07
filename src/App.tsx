import { useState } from "react";
import { HomePageGuest } from "./components/pages/HomePageGuest";
import { HomePageUser } from "./components/pages/HomePageUser";
import { LoginPage } from "./components/pages/LoginPage";
import { RegisterPage } from "./components/pages/RegisterPage";
import { AttractionDetails } from "./components/pages/AttractionDetails";
import { RouteDetails } from "./components/pages/RouteDetails";
import { TravelersTips } from "./components/pages/TravelersTips";
import { UserProfile } from "./components/pages/UserProfile";
import { AdminDashboard } from "./components/pages/AdminDashboard";
import { AdminManageAttractions } from "./components/pages/AdminManageAttractions";
import { AdminModerateReviews } from "./components/pages/AdminModerateReviews";
import { MobileViews } from "./components/pages/MobileViews";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Mountain, Smartphone, User, Lock, UserPlus, MapPin, Route, Lightbulb, BarChart, List, MessageSquare, Menu } from "lucide-react";

export type PageType = 
  | 'index'
  | 'home-guest'
  | 'home-user'
  | 'login'
  | 'register'
  | 'attraction-details'
  | 'route-details'
  | 'travelers-tips'
  | 'user-profile'
  | 'admin-dashboard'
  | 'admin-attractions'
  | 'admin-reviews'
  | 'mobile-views';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('index');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageType);
  };

  // Index/Landing Page with all mockup options
  if (currentPage === 'index') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#E8F4F8] to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mountain className="w-12 h-12 text-[#0A4B78]" />
              <h1 className="text-[#0A4B78]">Tourism in Kazakhstan</h1>
            </div>
            <p className="text-xl text-gray-700 mb-2">Website Mockup Collection</p>
            <p className="text-gray-600">
              High-fidelity mockups for a modern tourism platform
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Public Pages */}
            <div>
              <h2 className="mb-4 flex items-center gap-2">
                <User className="w-6 h-6 text-[#0A4B78]" />
                Public Pages
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setCurrentPage('home-guest')}
                >
                  <CardHeader>
                    <Mountain className="w-8 h-8 mb-2 text-[#0A4B78]" />
                    <CardTitle>Homepage (Guest)</CardTitle>
                    <CardDescription>
                      Landing page with hero image, tagline, and login button
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-[#0A4B78] hover:bg-[#083A5E]">
                      View Mockup
                    </Button>
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setCurrentPage('home-user')}
                >
                  <CardHeader>
                    <Menu className="w-8 h-8 mb-2 text-[#0A4B78]" />
                    <CardTitle>Homepage (User)</CardTitle>
                    <CardDescription>
                      Hero image, filters, and grid of attraction cards
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-[#0A4B78] hover:bg-[#083A5E]">
                      View Mockup
                    </Button>
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setCurrentPage('login')}
                >
                  <CardHeader>
                    <Lock className="w-8 h-8 mb-2 text-[#0A4B78]" />
                    <CardTitle>Login Page</CardTitle>
                    <CardDescription>
                      Simple login form with username and password
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-[#0A4B78] hover:bg-[#083A5E]">
                      View Mockup
                    </Button>
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setCurrentPage('register')}
                >
                  <CardHeader>
                    <UserPlus className="w-8 h-8 mb-2 text-[#0A4B78]" />
                    <CardTitle>Registration Page</CardTitle>
                    <CardDescription>
                      Sign-up form with username, email, and password
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-[#0A4B78] hover:bg-[#083A5E]">
                      View Mockup
                    </Button>
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setCurrentPage('attraction-details')}
                >
                  <CardHeader>
                    <MapPin className="w-8 h-8 mb-2 text-[#0A4B78]" />
                    <CardTitle>Attraction Details</CardTitle>
                    <CardDescription>
                      Full details, map, reviews, and review submission form
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-[#0A4B78] hover:bg-[#083A5E]">
                      View Mockup
                    </Button>
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setCurrentPage('route-details')}
                >
                  <CardHeader>
                    <Route className="w-8 h-8 mb-2 text-[#0A4B78]" />
                    <CardTitle>Route Details</CardTitle>
                    <CardDescription>
                      Multi-day itinerary with map and attractions list
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-[#0A4B78] hover:bg-[#083A5E]">
                      View Mockup
                    </Button>
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setCurrentPage('travelers-tips')}
                >
                  <CardHeader>
                    <Lightbulb className="w-8 h-8 mb-2 text-[#0A4B78]" />
                    <CardTitle>Traveler's Tips</CardTitle>
                    <CardDescription>
                      Helpful guides and tips for visiting Kazakhstan
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-[#0A4B78] hover:bg-[#083A5E]">
                      View Mockup
                    </Button>
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setCurrentPage('user-profile')}
                >
                  <CardHeader>
                    <User className="w-8 h-8 mb-2 text-[#0A4B78]" />
                    <CardTitle>User Profile</CardTitle>
                    <CardDescription>
                      User info, favorites list, and account settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-[#0A4B78] hover:bg-[#083A5E]">
                      View Mockup
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Admin Pages */}
            <div>
              <h2 className="mb-4 flex items-center gap-2">
                <BarChart className="w-6 h-6 text-[#0A4B78]" />
                Admin Pages
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setCurrentPage('admin-dashboard')}
                >
                  <CardHeader>
                    <BarChart className="w-8 h-8 mb-2 text-[#0A4B78]" />
                    <CardTitle>Admin Dashboard</CardTitle>
                    <CardDescription>
                      Analytics charts showing traffic and popular destinations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-[#0A4B78] hover:bg-[#083A5E]">
                      View Mockup
                    </Button>
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setCurrentPage('admin-attractions')}
                >
                  <CardHeader>
                    <List className="w-8 h-8 mb-2 text-[#0A4B78]" />
                    <CardTitle>Manage Attractions</CardTitle>
                    <CardDescription>
                      CRUD interface for managing tourist destinations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-[#0A4B78] hover:bg-[#083A5E]">
                      View Mockup
                    </Button>
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setCurrentPage('admin-reviews')}
                >
                  <CardHeader>
                    <MessageSquare className="w-8 h-8 mb-2 text-[#0A4B78]" />
                    <CardTitle>Moderate Reviews</CardTitle>
                    <CardDescription>
                      Review moderation with approve/deny actions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-[#0A4B78] hover:bg-[#083A5E]">
                      View Mockup
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Mobile Views */}
            <div>
              <h2 className="mb-4 flex items-center gap-2">
                <Smartphone className="w-6 h-6 text-[#0A4B78]" />
                Mobile Views
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setCurrentPage('mobile-views')}
                >
                  <CardHeader>
                    <Smartphone className="w-8 h-8 mb-2 text-[#0A4B78]" />
                    <CardTitle>Mobile Mockups</CardTitle>
                    <CardDescription>
                      Mobile versions of Homepage and Attraction Details
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-[#0A4B78] hover:bg-[#083A5E]">
                      View Mockup
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
              <h3 className="mb-4">Design System</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Primary Color</p>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded bg-[#0A4B78]"></div>
                    <span className="text-sm">#0A4B78</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Secondary Color</p>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded bg-[#2D5016]"></div>
                    <span className="text-sm">#2D5016</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Accent Color</p>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded bg-[#D4B896]"></div>
                    <span className="text-sm">#D4B896</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6">
                Color palette inspired by Kazakhstan's natural beauty: deep blues from lakes, 
                dark green from forests, and sandy beige from steppes.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render specific pages
  const pageComponents: Record<PageType, JSX.Element> = {
    'index': <></>,
    'home-guest': <HomePageGuest onNavigate={handleNavigate} />,
    'home-user': <HomePageUser onNavigate={handleNavigate} />,
    'login': <LoginPage onNavigate={handleNavigate} />,
    'register': <RegisterPage onNavigate={handleNavigate} />,
    'attraction-details': <AttractionDetails onNavigate={handleNavigate} />,
    'route-details': <RouteDetails onNavigate={handleNavigate} />,
    'travelers-tips': <TravelersTips onNavigate={handleNavigate} />,
    'user-profile': <UserProfile onNavigate={handleNavigate} />,
    'admin-dashboard': <AdminDashboard onNavigate={handleNavigate} />,
    'admin-attractions': <AdminManageAttractions onNavigate={handleNavigate} />,
    'admin-reviews': <AdminModerateReviews onNavigate={handleNavigate} />,
    'mobile-views': <MobileViews onNavigate={handleNavigate} />,
  };

  return (
    <div>
      {/* Back to Index Button */}
      {currentPage !== 'index' && (
        <div className="fixed top-4 left-4 z-50">
          <Button
            onClick={() => setCurrentPage('index')}
            variant="secondary"
            className="shadow-lg"
          >
            ← Back to All Mockups
          </Button>
        </div>
      )}
      
      {pageComponents[currentPage]}
    </div>
  );
}
