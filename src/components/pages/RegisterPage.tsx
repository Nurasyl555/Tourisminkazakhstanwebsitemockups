import { Header } from "../Header";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

interface RegisterPageProps {
  onNavigate: (page: string) => void;
}

export function RegisterPage({ onNavigate }: RegisterPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={onNavigate} />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle>Create an Account</CardTitle>
              <CardDescription>
                Join our community of travelers exploring Kazakhstan
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="reg-username">Username</Label>
                <Input 
                  id="reg-username" 
                  type="text" 
                  placeholder="Choose a username"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="reg-password">Password</Label>
                <Input 
                  id="reg-password" 
                  type="password" 
                  placeholder="Create a strong password"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input 
                  id="confirm-password" 
                  type="password" 
                  placeholder="Confirm your password"
                />
              </div>
              
              <div className="flex items-start gap-2 text-sm">
                <input type="checkbox" className="mt-1 rounded" />
                <span className="text-gray-600">
                  I agree to the Terms of Service and Privacy Policy
                </span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button 
                className="w-full bg-[#0A4B78] hover:bg-[#083A5E]"
                onClick={() => onNavigate('home-user')}
              >
                Create Account
              </Button>
              <p className="text-sm text-gray-600 text-center">
                Already have an account?{' '}
                <button 
                  onClick={() => onNavigate('login')}
                  className="text-[#0A4B78] hover:underline"
                >
                  Sign in
                </button>
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
