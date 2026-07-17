import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        We're sorry, the page you requested could not be found. Please go back to the homepage or contact us if you believe this is an error.
      </p>
      <Link 
        to="/" 
        className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors"
      >
        Return to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
