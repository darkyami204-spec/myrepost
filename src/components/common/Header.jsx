import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-wide text-purple-600 cursor-pointer hover:text-purple-700 transition">
          EchoWave
        </Link>

        <div className="flex space-x-4 items-center">
          <Link
            to="/"
            className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-purple-600 text-white hover:bg-purple-700 transition"
          >
            Log In
          </Link>
          
          <Link
            to="/signup"
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-purple-600 text-white hover:bg-purple-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}