import { Header } from "../Header";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Star, Check, X, AlertCircle } from "lucide-react";

interface AdminModerateReviewsProps {
  onNavigate: (page: string) => void;
}

const pendingReviews = [
  {
    id: 1,
    author: "Mike Johnson",
    attraction: "Charyn Canyon",
    rating: 5,
    date: "2024-11-05",
    text: "Amazing natural wonder! Budget-friendly too. Bring plenty of water and sun protection. The Valley of Castles is absolutely stunning at sunset.",
    status: "pending"
  },
  {
    id: 2,
    author: "Sarah Lee",
    attraction: "Kolsai Lakes",
    rating: 4,
    date: "2024-11-04",
    text: "Beautiful lakes but the road is quite rough. Worth it for the scenery though! Perfect for camping.",
    status: "pending"
  },
  {
    id: 3,
    author: "John Doe",
    attraction: "Almaty City",
    rating: 3,
    date: "2024-11-03",
    text: "Nice city but traffic can be bad. Good food options.",
    status: "pending"
  }
];

const approvedReviews = [
  {
    id: 4,
    author: "Emma Schmidt",
    attraction: "Charyn Canyon",
    rating: 5,
    date: "2024-10-28",
    text: "Absolutely breathtaking! The canyon is even more impressive in person. Highly recommend hiring a local guide for the best experience.",
    status: "approved"
  },
  {
    id: 5,
    author: "Aisha Nurlan",
    attraction: "Big Almaty Lake",
    rating: 5,
    date: "2024-10-25",
    text: "A must-visit for anyone in Kazakhstan. Great place for family trips. The trails are well-maintained and safe for children.",
    status: "approved"
  }
];

const rejectedReviews = [
  {
    id: 6,
    author: "Spam User",
    attraction: "Almaty City",
    rating: 1,
    date: "2024-10-20",
    text: "Click here for cheap hotels!!!",
    status: "rejected",
    reason: "Spam content"
  }
];

function ReviewCard({ review, onApprove, onReject }: { review: any; onApprove?: () => void; onReject?: () => void }) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarFallback>{review.author[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-gray-900">{review.author}</p>
              <p className="text-sm text-gray-600">{review.attraction}</p>
              <p className="text-xs text-gray-500 mt-1">{new Date(review.date).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
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
            <Badge 
              variant={
                review.status === 'pending' ? 'secondary' : 
                review.status === 'approved' ? 'default' : 
                'destructive'
              }
            >
              {review.status}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{review.text}</p>
        {review.status === 'rejected' && review.reason && (
          <div className="bg-red-50 border border-red-200 rounded p-3 mb-4 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 mt-0.5" />
            <div>
              <p className="text-sm text-red-900">Rejection Reason:</p>
              <p className="text-sm text-red-700">{review.reason}</p>
            </div>
          </div>
        )}
        {review.status === 'pending' && (
          <div className="flex gap-3">
            <Button 
              className="bg-green-600 hover:bg-green-700"
              onClick={onApprove}
            >
              <Check className="w-4 h-4 mr-2" />
              Approve
            </Button>
            <Button 
              variant="destructive"
              onClick={onReject}
            >
              <X className="w-4 h-4 mr-2" />
              Reject
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function AdminModerateReviews({ onNavigate }: AdminModerateReviewsProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn isAdmin onNavigate={onNavigate} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2">Moderate Reviews</h1>
          <p className="text-gray-600">Review and approve user-submitted reviews</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Pending Reviews</p>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-orange-600">{pendingReviews.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Approved Today</p>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-green-600">12</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Total Reviews</p>
            </CardHeader>
            <CardContent>
              <div className="text-3xl">1,247</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="bg-white">
            <TabsTrigger value="pending" className="gap-2">
              <AlertCircle className="w-4 h-4" />
              Pending ({pendingReviews.length})
            </TabsTrigger>
            <TabsTrigger value="approved" className="gap-2">
              <Check className="w-4 h-4" />
              Approved ({approvedReviews.length})
            </TabsTrigger>
            <TabsTrigger value="rejected" className="gap-2">
              <X className="w-4 h-4" />
              Rejected ({rejectedReviews.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending">
            <div className="space-y-4">
              {pendingReviews.length > 0 ? (
                pendingReviews.map((review) => (
                  <ReviewCard
                    key={review.id}
                    review={review}
                    onApprove={() => console.log('Approve', review.id)}
                    onReject={() => console.log('Reject', review.id)}
                  />
                ))
              ) : (
                <Card>
                  <CardContent className="text-center py-12">
                    <Check className="w-12 h-12 mx-auto mb-3 text-green-500" />
                    <p className="text-gray-600">No pending reviews to moderate</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="approved">
            <div className="space-y-4">
              {approvedReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rejected">
            <div className="space-y-4">
              {rejectedReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
