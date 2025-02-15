import React from 'react';
import { AuthForm } from '../components/AuthForm';
import { useLocation, Link } from 'react-router-dom';
import { Code, Terminal, Braces, Database, Layout } from 'lucide-react';

export function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 animate-float opacity-10">
          <Terminal className="w-24 h-24" />
        </div>
        <div className="absolute top-40 right-20 animate-float opacity-10" style={{ animationDelay: '1s' }}>
          <Braces className="w-32 h-32" />
        </div>
        <div className="absolute bottom-20 left-20 animate-float opacity-10" style={{ animationDelay: '2s' }}>
          <Database className="w-28 h-28" />
        </div>
        <div className="absolute bottom-40 right-10 animate-float opacity-10" style={{ animationDelay: '1.5s' }}>
          <Layout className="w-20 h-20" />
        </div>
      </div>

      <div className="relative z-10 animate-fade-in">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="animate-float">
              <Code className="w-16 h-16 text-blue-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            CodeEdu Platform
          </h1>
          <p className="text-xl text-gray-400 max-w-md">
            Your journey to mastering programming starts here
          </p>
        </div>

        <div className="glass">
          <AuthForm type={isLogin ? 'login' : 'signup'} />
        </div>

        <p className="mt-8 text-gray-300 text-center">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <Link
            to={isLogin ? '/signup' : '/login'}
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </Link>
        </p>
      </div>
    </div>
  );
}