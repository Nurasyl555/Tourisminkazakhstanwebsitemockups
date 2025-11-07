import { Header } from "../Header";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { MapPin, Clock, DollarSign, Users, Calendar } from "lucide-react";

interface RouteDetailsProps {
  onNavigate: (page: string) => void;
}

const routeStops = [
  {
    day: 1,
    title: "Almaty City",
    description: "Start your journey in Kazakhstan's largest city. Visit Kok-Tobe Hill, Zenkov Cathedral, and the Green Bazaar.",
    image: "https://images.unsplash.com/photo-1762490375835-7df90519c9c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbG1hdHklMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NjI1NDU0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "Full Day"
  },
  {
    day: 2,
    title: "Charyn Canyon",
    description: "Drive to the spectacular Charyn Canyon. Explore the Valley of Castles and enjoy hiking trails.",
    image: "https://images.unsplash.com/photo-1556881798-ea9705321743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyeW4lMjBjYW55b24lMjBrYXpha2hzdGFufGVufDF8fHx8MTc2MjU0NTQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "Full Day"
  },
  {
    day: 3,
    title: "Kolsai Lakes",
    description: "Visit the stunning Kolsai Lakes, known as the 'Pearls of Tian Shan'. Perfect for hiking and photography.",
    image: "https://images.unsplash.com/photo-1696229592679-9b8f53b68a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxha2UlMjB0dXJxdW9pc2V8ZW58MXx8fHwxNzYyNTQ1NDQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "Full Day"
  }
];

export function RouteDetails({ onNavigate }: RouteDetailsProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn onNavigate={onNavigate} />
      
      <main>
        {/* Hero Section */}
        <div className="bg-[#0A4B78] text-white py-16">
          <div className="container mx-auto px-4">
            <Badge className="bg-white text-[#0A4B78] mb-4">3-Day Route</Badge>
            <h1 className="mb-4 text-white">Almaty to Kolsai Lakes Adventure</h1>
            <p className="text-xl text-white/90 mb-6">
              Experience the best of southern Kazakhstan with this carefully curated 3-day route
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8" />
                <div>
                  <p className="text-sm text-white/80">Duration</p>
                  <p>3 Days</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <DollarSign className="w-8 h-8" />
                <div>
                  <p className="text-sm text-white/80">Budget</p>
                  <p>$200-300</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8" />
                <div>
                  <p className="text-sm text-white/80">Difficulty</p>
                  <p>Moderate</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-8 h-8" />
                <div>
                  <p className="text-sm text-white/80">Distance</p>
                  <p>~500 km</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Route Map */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="mb-4">Route Overview</h2>
                <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Route Map</p>
                    <p className="text-sm">Almaty → Charyn Canyon → Kolsai Lakes</p>
                  </div>
                </div>
              </div>

              {/* Day by Day Itinerary */}
              <div className="space-y-6">
                <h2>Daily Itinerary</h2>
                
                {routeStops.map((stop, index) => (
                  <div key={stop.day} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="grid md:grid-cols-3">
                      <div className="h-48 md:h-auto">
                        <ImageWithFallback
                          src={stop.image}
                          alt={stop.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-[#0A4B78] text-white flex items-center justify-center">
                            {stop.day}
                          </div>
                          <div>
                            <h3>{stop.title}</h3>
                            <p className="text-sm text-gray-600">{stop.duration}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{stop.description}</p>
                        {index < routeStops.length - 1 && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span>Drive to next destination: ~2-3 hours</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* What's Included */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <h3 className="mb-4">What to Expect</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-[#2D5016] mb-2">Included</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Scenic mountain drives</li>
                      <li>✓ Natural wonders and hiking trails</li>
                      <li>✓ Photo opportunities</li>
                      <li>✓ Cultural experiences</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-gray-700 mb-2">You'll Need</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Rental car or driver</li>
                      <li>• Camping gear or hotel bookings</li>
                      <li>• Hiking equipment</li>
                      <li>• Valid ID/passport</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Book This Route */}
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <h3 className="mb-4">Start This Journey</h3>
                <Button className="w-full bg-[#0A4B78] hover:bg-[#083A5E] mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  Add to Itinerary
                </Button>
                <Button variant="outline" className="w-full mb-4">
                  Download PDF Guide
                </Button>
                
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <p className="text-sm text-gray-600 mb-3">Best Time to Travel</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">May</Badge>
                    <Badge variant="outline">June</Badge>
                    <Badge variant="outline">Sep</Badge>
                    <Badge variant="outline">Oct</Badge>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-[#E8F4F8] p-6 rounded-lg">
                <h3 className="mb-3">Travel Tips</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Book accommodations in advance during peak season</li>
                  <li>• Bring cash - not all places accept cards</li>
                  <li>• Start early to maximize daylight</li>
                  <li>• Check weather conditions before departure</li>
                  <li>• Learn basic Russian or Kazakh phrases</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
