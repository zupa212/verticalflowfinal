import React, { useState, useEffect } from 'react';
import AccessCode from './AccessCode';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [hasAccess, setHasAccess] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if user already has access
    const access = localStorage.getItem('verticalflow_access');
    if (access === 'granted') {
      setHasAccess(true);
    }
    setIsChecking(false);
  }, []);

  const handleAccessGranted = () => {
    setHasAccess(true);
  };

  if (isChecking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-purple-600 to-blue-600 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!hasAccess) {
    return <AccessCode onAccessGranted={handleAccessGranted} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
