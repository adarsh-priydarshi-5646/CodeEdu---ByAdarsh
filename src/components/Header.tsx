import React from 'react';
import { Code, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export function Header() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Code className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold text-white">CodeEdu Platform</span>
          </Link>
          
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </header>
  );
}