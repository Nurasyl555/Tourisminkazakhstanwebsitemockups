import { Mountain, User, Menu } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  isLoggedIn?: boolean;
  isAdmin?: boolean;
  onNavigate?: (page: string) => void;
}

export function Header({ isLoggedIn = false, isAdmin = false, onNavigate }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate?.('home-guest')}>
            <Mountain className="w-8 h-8 text-[#0A4B78]" />
            <span className="text-[#0A4B78]">Tourism Kazakhstan</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => onNavigate?.('home-user')} className="text-gray-700 hover:text-[#0A4B78]">
              Destinations
            </button>
            <button onClick={() => onNavigate?.('route-details')} className="text-gray-700 hover:text-[#0A4B78]">
              Routes
            </button>
            <button onClick={() => onNavigate?.('travelers-tips')} className="text-gray-700 hover:text-[#0A4B78]">
              Traveler's Tips
            </button>
            {isAdmin && (
              <button onClick={() => onNavigate?.('admin-dashboard')} className="text-gray-700 hover:text-[#0A4B78]">
                Admin
              </button>
            )}
          </nav>

          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => onNavigate?.('user-profile')}
              >
                <User className="w-5 h-5" />
              </Button>
            ) : (
              <>
                <Button 
                  variant="ghost"
                  onClick={() => onNavigate?.('login')}
                >
                  Login
                </Button>
                <Button 
                  className="bg-[#0A4B78] hover:bg-[#083A5E]"
                  onClick={() => onNavigate?.('register')}
                >
                  Sign Up
                </Button>
              </>
            )}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
