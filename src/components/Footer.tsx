
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-700 py-6 backdrop-blur-md bg-black/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Negoti8. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-sm text-gray-400">Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span className="text-sm text-gray-400">and AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
