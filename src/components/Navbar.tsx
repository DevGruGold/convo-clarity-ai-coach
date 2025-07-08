
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Glasses, MessageSquare, Settings, Menu, ExternalLink } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  
  // Helper function to determine if a link is active
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="flex items-center space-x-2">
          <Glasses className="h-8 w-8 text-gray-800 dark:text-gray-200" />
          <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
            XMRT Vision
          </span>
        </Link>
        
        {isMobile ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
              <DropdownMenuItem className={isActive('/dashboard') ? 'bg-gray-100 dark:bg-gray-700' : ''}>
                <Link to="/dashboard" className="flex items-center w-full text-gray-800 dark:text-gray-200">
                  <MessageSquare className="mr-2 h-4 w-4" /> Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className={isActive('/settings') ? 'bg-gray-100 dark:bg-gray-700' : ''}>
                <Link to="/settings" className="flex items-center w-full text-gray-800 dark:text-gray-200">
                  <Settings className="mr-2 h-4 w-4" /> Settings
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <nav className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-gray-800 dark:text-gray-200" 
              asChild
            >
              <a href="https://xmrtglasses.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <ExternalLink className="mr-2 h-4 w-4" /> XMRT Glasses
              </a>
            </Button>
            <Button 
              variant={isActive('/dashboard') ? 'default' : 'ghost'} 
              className={isActive('/dashboard') ? 'bg-blue-600 text-white' : 'text-gray-800 dark:text-gray-200'} 
              asChild
            >
              <Link to="/dashboard" className="flex items-center">
                <MessageSquare className="mr-2 h-4 w-4" /> Dashboard
              </Link>
            </Button>
            <Button 
              variant={isActive('/settings') ? 'default' : 'ghost'} 
              className={isActive('/settings') ? 'bg-blue-600 text-white' : 'text-gray-800 dark:text-gray-200'} 
              asChild
            >
              <Link to="/settings" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" /> Settings
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
