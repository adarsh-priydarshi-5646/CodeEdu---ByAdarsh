import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Auth } from './pages/Auth';
import { Languages } from './pages/Languages';
import { useAuth } from './hooks/useAuth';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Auth />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Auth />}
        />
        <Route
          path="/"
          element={user ? <Languages /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App