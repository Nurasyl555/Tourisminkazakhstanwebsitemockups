import { Header } from "../Header";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MapPin, Star, Heart, Share2, Calendar } from "lucide-react";

interface AttractionDetailsProps {
  onNavigate: (page: string) => void;
}

const reviews = [
  {
    id: 1,
    author: "Emma Schmidt",
    avatar: "",
    country: "Germany",
    rating: 5,
    date: "October 2024",
    text: "Absolutely breathtaking! The canyon is even more impressive in person. Highly recommend hiring a local guide for the best experience."
  },
  {
    id: 2,
    author: "Aisha Nurlan",
    avatar: "",
    country: "Kazakhstan",
    rating: 5,
    date: "September 2024",
    text: "A must-visit for anyone in Kazakhstan. Great place for family trips. The trails are well-maintained and safe for children."
  },
  {
    id: 3,
    author: "Mike Johnson",
    avatar: "",
    country: "USA",
    rating: 4,
    date: "August 2024",
    text: "Amazing natural wonder! Budget-friendly too. Bring plenty of water and sun protection."
  }
];

export function AttractionDetails({ onNavigate }: AttractionDetailsProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn onNavigate={onNavigate} />
      
      <main>
        {/* Hero Image */}
        <div className="relative h-[500px]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1556881798-ea9705321743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyeW4lMjBjYW55b24lMjBrYXpha2hzdGFufGVufDF8fHx8MTc2MjU0NTQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Charyn Canyon"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
            <div className="container mx-auto">
              <Badge className="bg-[#0A4B78] mb-3">Natural Wonder</Badge>
              <h1 className="text-white mb-2">Charyn Canyon</h1>
              <div className="flex items-center gap-4 text-white">
                <div className="flex items-center gap-1">
                  <MapPin className="w-5 h-5" />
                  <span>Almaty Region, Kazakhstan</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span>4.8 (127 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h2>About This Destination</h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Heart className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Charyn Canyon is a breathtaking natural wonder located in the Almaty Region of Kazakhstan, 
                  approximately 200 km east of Almaty city. Often called Kazakhstan's Grand Canyon, this 
                  spectacular geological formation stretches for 154 kilometers along the Charyn River.
                </p>
                <p className="text-gray-700 mb-4">
                  The canyon was formed over 12 million years ago and features stunning red sandstone formations 
                  that rise up to 300 meters high. The most famous section is the Valley of Castles, where wind 
                  and water have sculpted the rocks into tower-like formations resembling medieval fortifications.
                </p>
                <p className="text-gray-700">
                  Visitors can explore various trails, enjoy panoramic viewpoints, and experience the unique 
                  ecosystem that includes ash groves dating back to the Ice Age. It's an ideal destination for 
                  hiking, photography, and camping.
                </p>
              </div>

              {/* Map Section */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="mb-4">Location</h2>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Charyn Canyon, Almaty Region</p>
                    <p className="text-sm">43.3497° N, 79.0828° E</p>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="mb-6">Traveler Reviews ({reviews.length})</h2>
                
                <div className="space-y-6 mb-8">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarFallback>{review.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <p className="text-gray-900">{review.author}</p>
                              <p className="text-sm text-gray-500">{review.country}</p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1 mb-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating
                                        ? 'fill-yellow-400 text-yellow-400'
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <p className="text-xs text-gray-500">{review.date}</p>
                            </div>
                          </div>
                          <p className="text-gray-700">{review.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Write Review Form */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="mb-4">Write a Review</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm mb-2">Your Rating</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button key={star} className="hover:scale-110 transition-transform">
                            <Star className="w-6 h-6 text-gray-300 hover:text-yellow-400" />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Your Review</label>
                      <Textarea 
                        placeholder="Share your experience..."
                        rows={4}
                      />
                    </div>
                    <Button className="bg-[#0A4B78] hover:bg-[#083A5E]">
                      Submit Review
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="mb-4">Quick Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time to Visit</span>
                    <span>Apr - Oct</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Entrance Fee</span>
                    <span>700 KZT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span>Full Day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Difficulty</span>
                    <span>Moderate</span>
                  </div>
                </div>
              </div>

              {/* Plan Visit */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="mb-4">Plan Your Visit</h3>
                <Button className="w-full bg-[#0A4B78] hover:bg-[#083A5E] mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  Add to Itinerary
                </Button>
                <Button variant="outline" className="w-full">
                  View Nearby Attractions
                </Button>
              </div>

              {/* Tips */}
              <div className="bg-[#E8F4F8] p-6 rounded-lg">
                <h3 className="mb-3">Traveler Tips</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Bring plenty of water and sunscreen</li>
                  <li>• Wear comfortable hiking shoes</li>
                  <li>• Best visited early morning or late afternoon</li>
                  <li>• Camping is allowed in designated areas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
