import { Header } from "../Header";
import { AttractionCard } from "../AttractionCard";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Heart, MapPin, Settings, Star } from "lucide-react";

interface UserProfileProps {
  onNavigate: (page: string) => void;
}

const favorites = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1556881798-ea9705321743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyeW4lMjBjYW55b24lMjBrYXpha2hzdGFufGVufDF8fHx8MTc2MjU0NTQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Charyn Canyon",
    region: "Almaty Region",
    category: "Natural Wonder",
    rating: 4.8
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1696229592679-9b8f53b68a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxha2UlMjB0dXJxdW9pc2V8ZW58MXx8fHwxNzYyNTQ1NDQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Kolsai Lakes",
    region: "Almaty Region",
    category: "Lake",
    rating: 4.9
  }
];

const myReviews = [
  {
    id: 1,
    attraction: "Charyn Canyon",
    rating: 5,
    date: "October 2024",
    text: "Absolutely breathtaking! The canyon is even more impressive in person."
  },
  {
    id: 2,
    attraction: "Almaty City",
    rating: 4,
    date: "October 2024",
    text: "Beautiful city with great food and friendly people. Don't miss Kok-Tobe!"
  }
];

export function UserProfile({ onNavigate }: UserProfileProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn onNavigate={onNavigate} />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-start gap-6">
              <Avatar className="w-24 h-24">
                <AvatarFallback className="text-2xl bg-[#0A4B78] text-white">ES</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h1 className="mb-1">Emma Schmidt</h1>
                    <p className="text-gray-600">@emma_travels</p>
                  </div>
                  <Button variant="outline">
                    <Settings className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
                <div className="flex items-center gap-6 mt-4 text-gray-600">
                  <div>
                    <span className="text-2xl text-gray-900 mr-2">12</span>
                    <span>Places Visited</span>
                  </div>
                  <div>
                    <span className="text-2xl text-gray-900 mr-2">8</span>
                    <span>Reviews</span>
                  </div>
                  <div>
                    <span className="text-2xl text-gray-900 mr-2">5</span>
                    <span>Favorites</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="favorites" className="space-y-6">
            <TabsList className="bg-white">
              <TabsTrigger value="favorites" className="gap-2">
                <Heart className="w-4 h-4" />
                My Favorites
              </TabsTrigger>
              <TabsTrigger value="reviews" className="gap-2">
                <Star className="w-4 h-4" />
                My Reviews
              </TabsTrigger>
              <TabsTrigger value="visited" className="gap-2">
                <MapPin className="w-4 h-4" />
                Visited Places
              </TabsTrigger>
              <TabsTrigger value="settings" className="gap-2">
                <Settings className="w-4 h-4" />
                Account Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="favorites">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="mb-6">My Favorite Destinations</h2>
                {favorites.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favorites.map((attraction) => (
                      <AttractionCard
                        key={attraction.id}
                        {...attraction}
                        onClick={() => onNavigate('attraction-details')}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <Heart className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p>No favorites yet. Start exploring and save your favorite destinations!</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="mb-6">My Reviews</h2>
                <div className="space-y-6">
                  {myReviews.map((review) => (
                    <Card key={review.id}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{review.attraction}</CardTitle>
                          <div className="flex items-center gap-1">
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
                        </div>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{review.text}</p>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">Delete</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="visited">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="mb-6">Places I've Visited</h2>
                <div className="text-center py-12 text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p>Mark places as visited when you travel!</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="settings">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="mb-6">Account Settings</h2>
                <div className="space-y-6 max-w-2xl">
                  <div className="space-y-2">
                    <Label htmlFor="profile-username">Username</Label>
                    <Input id="profile-username" defaultValue="emma_travels" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="profile-email">Email</Label>
                    <Input id="profile-email" type="email" defaultValue="emma@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="profile-bio">Bio</Label>
                    <Input id="profile-bio" defaultValue="Travel enthusiast exploring Kazakhstan" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="profile-country">Country</Label>
                    <Input id="profile-country" defaultValue="Germany" />
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-new-password">Confirm New Password</Label>
                        <Input id="confirm-new-password" type="password" />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button className="bg-[#0A4B78] hover:bg-[#083A5E]">
                      Save Changes
                    </Button>
                    <Button variant="outline">
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
