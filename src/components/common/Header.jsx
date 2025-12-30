import React from 'react';

export default function Header({ navigate }) {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <h1 
          onClick={() => navigate('home')}
          className="text-2xl font-bold tracking-wide text-purple-600 cursor-pointer hover:text-purple-700 transition"
        >
          EchoWave
        </h1>

        <div className="flex space-x-4 items-center">
          <button
            onClick={() => navigate('home')}
            className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
          >
            Home
          </button>

          <button
            onClick={() => navigate('login')}
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-purple-600 text-white hover:bg-purple-700 transition"
          >
            Log In
          </button>
          
          <button
            onClick={() => navigate('signup')}
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-purple-600 text-white hover:bg-purple-700 transition"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}