import { Header } from "../Header";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

interface LoginPageProps {
  onNavigate: (page: string) => void;
}

export function LoginPage({ onNavigate }: LoginPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={onNavigate} />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle>Welcome Back</CardTitle>
              <CardDescription>
                Sign in to your account to continue exploring Kazakhstan
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username or Email</Label>
                <Input 
                  id="username" 
                  type="text" 
                  placeholder="Enter your username or email"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter your password"
                />
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-[#0A4B78] hover:underline">
                  Forgot password?
                </a>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button 
                className="w-full bg-[#0A4B78] hover:bg-[#083A5E]"
                onClick={() => onNavigate('home-user')}
              >
                Sign In
              </Button>
              <p className="text-sm text-gray-600 text-center">
                Don't have an account?{' '}
                <button 
                  onClick={() => onNavigate('register')}
                  className="text-[#0A4B78] hover:underline"
                >
                  Sign up
                </button>
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
