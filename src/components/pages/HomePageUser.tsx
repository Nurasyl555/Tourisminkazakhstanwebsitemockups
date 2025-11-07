import { Header } from "../Header";
import { AttractionCard } from "../AttractionCard";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

interface HomePageUserProps {
  onNavigate: (page: string) => void;
}

const attractions = [
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
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1762490375835-7df90519c9c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbG1hdHklMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NjI1NDU0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Almaty City",
    region: "Almaty",
    category: "City",
    rating: 4.6
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1629907903204-e2bd1d402f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXpha2hzdGFuJTIwc3RlcHBlJTIwbmF0dXJlfGVufDF8fHx8MTc2MjU0NTQ0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Kazakh Steppe",
    region: "Central Kazakhstan",
    category: "Landscape",
    rating: 4.5
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1695554477492-303aacd40561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHl1cnQlMjBub21hZGljfGVufDF8fHx8MTc2MjU0NTQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Traditional Yurt Experience",
    region: "Various Regions",
    category: "Cultural",
    rating: 4.7
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1530480667809-b655d4dc3aaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXpha2hzdGFuJTIwbGFuZHNjYXBlJTIwbW91bnRhaW5zfGVufDF8fHx8MTc2MjU0NTQ0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Tian Shan Mountains",
    region: "Almaty Region",
    category: "Mountains",
    rating: 4.9
  }
];

export function HomePageUser({ onNavigate }: HomePageUserProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn onNavigate={onNavigate} />
      
      <main>
        {/* Hero Section */}
        <div className="relative h-[400px] flex items-center justify-center">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1530480667809-b655d4dc3aaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXpha2hzdGFuJTIwbGFuZHNjYXBlJTIwbW91bnRhaW5zfGVufDF8fHx8MTc2MjU0NTQ0Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Kazakhstan landscape"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative z-10 text-center text-white max-w-4xl px-4">
            <h1 className="mb-6 text-white">Explore Kazakhstan</h1>
            <p className="text-xl text-white">Your next adventure awaits</p>
          </div>
        </div>

        {/* Filters Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input 
                  placeholder="Search destinations..." 
                  className="pl-10"
                />
              </div>
              
              <Select defaultValue="all-regions">
                <SelectTrigger>
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-regions">All Regions</SelectItem>
                  <SelectItem value="almaty">Almaty Region</SelectItem>
                  <SelectItem value="astana">Astana</SelectItem>
                  <SelectItem value="central">Central Kazakhstan</SelectItem>
                  <SelectItem value="west">West Kazakhstan</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="all-categories">
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-categories">All Categories</SelectItem>
                  <SelectItem value="natural">Natural Wonder</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="city">City</SelectItem>
                  <SelectItem value="mountains">Mountains</SelectItem>
                  <SelectItem value="lakes">Lakes</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="popular">
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Attractions Grid */}
          <div>
            <h2 className="mb-6">Popular Destinations</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
              {attractions.map((attraction) => (
                <AttractionCard
                  key={attraction.id}
                  {...attraction}
                  onClick={() => onNavigate('attraction-details')}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
