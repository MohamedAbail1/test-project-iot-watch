import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
     
      <div className="flex-grow flex flex-col items-center justify-center px-4">
        <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
          Oops! The page you're looking for does not exist.
        </p>
        <Link
          to="/"
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
