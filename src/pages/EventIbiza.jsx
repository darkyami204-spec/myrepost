import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { EventDetails } from '../components/events/EventCard';
import ArtistCard from '../components/events/ArtistCard';
import { ProducerCard } from '../components/events/ArtistCard';

export default function EventIbiza({ navigate }) {
  const producers = [
    { 
      name: 'R3HAB', 
      followers: '6M', 
      genre: 'Future House', 
      bioKey: 'r3hab-bio',
      color: 'from-cyan-400 to-blue-500'
    },
    { 
      name: 'Calvin Harris', 
      followers: '23M', 
      genre: 'EDM/Pop', 
      bioKey: 'calvin-harris-bio',
      color: 'from-pink-400 to-purple-500'
    },
    { 
      name: 'The Chainsmokers', 
      followers: '16M', 
      genre: 'Pop-EDM', 
      bioKey: 'chainsmokers-bio',
      color: 'from-yellow-400 to-orange-500'
    },
    { 
      name: 'Tiësto', 
      followers: '20M', 
      genre: 'Progressive House', 
      bioKey: 'tiesto-bio',
      color: 'from-red-400 to-pink-500'
    },
    { 
      name: 'David Guetta', 
      followers: '25M', 
      genre: 'EDM/Pop', 
      bioKey: 'david-guetta-bio',
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  const eventDetails = {
    description: [
      "Ibiza Opening Parties mark the official start of the summer season on the White Isle. The world's most legendary clubs open their doors for the first time, setting the tone for an unforgettable season of electronic music.",
      "From Pacha to Amnesia, Ushuaïa to Hï Ibiza, the opening parties feature exclusive lineups, stunning production, and an electric atmosphere that only Ibiza can deliver. This is where the global dance music community reunites after the winter break.",
      "The opening weekend transforms the entire island into a non-stop celebration, with pool parties, boat parties, beach clubs, and afterhours sessions running around the clock. It's the most anticipated weekend in the electronic music calendar."
    ]
  };

  const featuredArtists = [
    { name: 'Calvin Harris', genre: 'EDM/Pop', bioKey: 'calvin-harris-bio' },
    { name: 'The Chainsmokers', genre: 'Pop-EDM', bioKey: 'chainsmokers-bio' },
    { name: 'Tiësto', genre: 'Progressive House', bioKey: 'tiesto-bio' },
    { name: 'R3HAB', genre: 'Future House', bioKey: 'r3hab-bio' }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header navigate={navigate} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Image */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&h=600&fit=crop&q=80"
                alt="Ibiza sunset beach club"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
                  SUMMER SEASON
                </span>
                <h1 className="text-3xl font-bold text-white">Ibiza Opening Parties 2025</h1>
                <p className="text-gray-200 mt-2">May 2-4, 2025 • Multiple Venues • Ibiza, Spain</p>
              </div>
            </div>

            {/* Event Details */}
            <EventDetails event={eventDetails} />

            {/* Lineup Preview */}
            <div className="mt-10">
              <h3 className="font-bold text-xl mb-6">Featured Artists</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuredArtists.map((artist, index) => (
                  <ArtistCard
                    key={index}
                    artist={artist}
                    onClick={() => navigate(artist.bioKey)}
                    confirmed={true}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Iconic Venues */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
              <h3 className="font-bold text-lg mb-4">Iconic Venues</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🎪</span>
                  <span>Pacha - Legendary since 1973</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🌟</span>
                  <span>Hï Ibiza - Ultra-modern club</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🏖️</span>
                  <span>Ushuaïa - Open-air experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🎵</span>
                  <span>Amnesia - Iconic super club</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🌊</span>
                  <span>DC-10 - Underground legend</span>
                </li>
              </ul>
            </div>

            {/* Producers Spotlight */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <h3 className="font-bold text-lg mb-6">Featured Producers</h3>
              <div className="space-y-4">
                {producers.map((producer, index) => (
                  <ProducerCard
                    key={index}
                    producer={producer}
                    onClick={() => navigate(producer.bioKey)}
                  />
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-6">Essential Links</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center p-3 hover:bg-blue-50 rounded-lg transition duration-300 group">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:scale-125 transition"></span>
                  <span className="font-medium">Ticket Information</span>
                  <span className="ml-auto text-blue-600">→</span>
                </a>
                <a href="#" className="flex items-center p-3 hover:bg-blue-50 rounded-lg transition duration-300 group">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:scale-125 transition"></span>
                  <span className="font-medium">Club Calendar</span>
                  <span className="ml-auto text-blue-600">→</span>
                </a>
                <a href="#" className="flex items-center p-3 hover:bg-blue-50 rounded-lg transition duration-300 group">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:scale-125 transition"></span>
                  <span className="font-medium">Ibiza Guide</span>
                  <span className="ml-auto text-blue-600">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}