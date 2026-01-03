import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();
  const [genreOpen, setGenreOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [exclusivesOpen, setExclusivesOpen] = useState(false);

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
                <Link to="/progressive" className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full">Progressive</Link>
                <Link to="/future" className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full">Future</Link>
                <Link to="/bass" className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full">Bass</Link>
              </div>
            )}
          </div>

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
                <Link to="/amsterdam" className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full">Amsterdam</Link>
                <Link to="/tenerife" className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full">Tenerife</Link>
                <Link to="/ibiza" className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full">Ibiza</Link>
              </div>
            )}
          </div>

          <Link
            to="/tickets"
            className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
          >
            Tickets
          </Link>

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
                <Link to="/biographies" className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full">Biography</Link>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Discounts</a>
              </div>
            )}
          </div>

          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">
                Welcome, {user.firstName}!
              </span>
              <button
                onClick={logout}
                className="px-4 py-2 rounded-lg text-sm font-semibold bg-purple-600 text-white hover:bg-purple-700 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}