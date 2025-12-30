import React, { useState } from 'react';

export default function Navigation({ navigate }) {
  const [genreOpen, setGenreOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [exclusivesOpen, setExclusivesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
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

          {/* GENRE DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setGenreOpen(true)}
            onMouseLeave={() => setGenreOpen(false)}
          >
            <button className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition flex items-center gap-1">
              Genre <span className="text-xs">▼</span>
            </button>
            {genreOpen && (
              <div className="absolute left-0 top-full w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Progressive
                </a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Future
                </a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Bass
                </a>
              </div>
            )}
          </div>

          {/* EVENTS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setEventsOpen(true)}
            onMouseLeave={() => setEventsOpen(false)}
          >
            <button className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition flex items-center gap-1">
              Events <span className="text-xs">▼</span>
            </button>
            {eventsOpen && (
              <div className="absolute left-0 top-full w-44 bg-white border border-gray-200 rounded-lg shadow-lg">
                <button 
                  onClick={() => navigate('amsterdam-page')} 
                  className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full"
                >
                  Amsterdam
                </button>
                <button 
                  onClick={() => navigate('tenerife-page')} 
                  className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full"
                >
                  Tenerife
                </button>
                <button 
                  onClick={() => navigate('ibiza-page')} 
                  className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full"
                >
                  Ibiza
                </button>
              </div>
            )}
          </div>

          <a 
            href="#" 
            className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
          >
            Playlist
          </a>

          {/* EXCLUSIVES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setExclusivesOpen(true)}
            onMouseLeave={() => setExclusivesOpen(false)}
          >
            <button className="px-4 py-2 rounded-lg text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 transition flex items-center gap-1">
              Exclusives <span className="text-xs">▼</span>
            </button>
            {exclusivesOpen && (
              <div className="absolute right-0 top-full w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Biography
                </a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Discounts
                </a>
              </div>
            )}
          </div>

          <button
            onClick={() => navigate('login')}
            className="ml-6 px-4 py-2 rounded-lg text-sm font-semibold bg-purple-600 text-white hover:bg-purple-700 transition"
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
    </nav>
  );
}