import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { EventDetails } from '../components/events/EventCard';
import ArtistCard from '../components/events/ArtistCard';
import { ProducerCard } from '../components/events/ArtistCard';

export default function EventIbiza({ navigate }) {
  const producers = [
    { 
      name: 'R3hab', 
      followers: '12M', 
      genre: 'Big-Room House', 
      bioKey: 'r3hab-bio',
      color: 'from-pink-400 to-purple-500'
    },
    { 
      name: 'Calvin Harris', 
      followers: '30M', 
      genre: 'EDM/Pop', 
      bioKey: 'calvin-harris-bio',
      color: 'from-blue-400 to-cyan-500'
    },
    { 
      name: 'The Chainsmokers', 
      followers: '20M', 
      genre: 'Pop-EDM', 
      bioKey: 'chainsmokers-bio',
      color: 'from-green-400 to-teal-500'
    },
    { 
      name: 'Tiësto', 
      followers: '18M', 
      genre: 'EDM/Trance', 
      bioKey: 'tiesto-bio',
      color: 'from-red-400 to-orange-500'
    },
    { 
      name: 'Alesso', 
      followers: '9M', 
      genre: 'Progressive House', 
      bioKey: 'alesso-bio',
      color: 'from-indigo-400 to-purple-500'
    }
  ];

<<<<<<< HEAD
=======
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

>>>>>>> 14a745b47d1605977741684c88773018d0a304c4
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide text-purple-600">EchoWave</h1>

          <div className="flex space-x-4 items-center">
            <button
              onClick={() => navigate('home')}
              className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
            >
              Home
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Image */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=600&fit=crop&q=80"
                alt="Ibiza sunset party with people dancing"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
                  SUMMER SEASON
                </span>
                <h1 className="text-3xl font-bold text-white">Ibiza Opening Parties 2025</h1>
                <p className="text-gray-200 mt-2">May 2-4, 2025 • Multiple Clubs • Ibiza, Spain</p>
              </div>
            </div>

            {/* Event Details */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">About the Event</h2>
              <div className="space-y-6 text-gray-700 text-lg">
                <p>
                  Ibiza Opening Parties mark the official start of the world's most famous clubbing season, 
                  transforming the White Isle into the global capital of electronic music. For three days, 
                  every legendary venue unveils its new season with spectacular shows, exclusive debuts, 
                  and world-class production.
                </p>
                <p>
                  From the iconic sunset at Café del Mar to the legendary dance floors of Pacha, Amnesia, 
                  Ushuaïa, and Hï Ibiza, the Opening Parties feature an unprecedented lineup of international 
                  superstars and underground icons. Each venue competes to present the most spectacular 
                  opening event, featuring breathtaking production, surprise guests, and exclusive premieres.
                </p>
                <p>
                  This is more than just a festival—it's the annual rebirth of Ibiza's clubbing scene, 
                  where trends are set, careers are made, and memories are created. Join the pilgrimage 
                  to where electronic music history is written every summer.
                </p>
              </div>

<<<<<<< HEAD
              {/* Lineup Preview - ALL ARTISTS CLICKABLE */}
              <div className="mt-10">
                <h3 className="font-bold text-xl mb-6">Featured Artists</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* R3hab - Clickable */}
                  <div 
                    onClick={() => navigate('r3hab-bio')}
                    className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition duration-300 cursor-pointer active:scale-[0.98]"
                  >
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                      <span className="text-pink-600 font-bold text-lg">R</span>
                    </div>
                    <div>
                      <span className="font-semibold text-lg hover:text-pink-600">R3hab</span>
                      <div className="text-sm text-gray-500">Big-Room House</div>
                    </div>
                    <span className="ml-auto text-sm bg-pink-100 text-pink-600 px-3 py-1 rounded-full">Confirmed</span>
                  </div>
                  
                  {/* Calvin Harris - Clickable */}
                  <div 
                    onClick={() => navigate('calvin-harris-bio')}
                    className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition duration-300 cursor-pointer active:scale-[0.98]"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold text-lg">C</span>
                    </div>
                    <div>
                      <span className="font-semibold text-lg hover:text-blue-600">Calvin Harris</span>
                      <div className="text-sm text-gray-500">EDM/Pop</div>
                    </div>
                    <span className="ml-auto text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">Confirmed</span>
                  </div>
                  
                  {/* The Chainsmokers - Clickable */}
                  <div 
                    onClick={() => navigate('chainsmokers-bio')}
                    className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition duration-300 cursor-pointer active:scale-[0.98]"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold text-lg">T</span>
                    </div>
                    <div>
                      <span className="font-semibold text-lg hover:text-green-600">The Chainsmokers</span>
                      <div className="text-sm text-gray-500">Pop-EDM</div>
                    </div>
                    <span className="ml-auto text-sm bg-green-100 text-green-600 px-3 py-1 rounded-full">Confirmed</span>
                  </div>
                  
                  {/* Tiësto - Clickable */}
                  <div 
                    onClick={() => navigate('tiesto-bio')}
                    className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition duration-300 cursor-pointer active:scale-[0.98]"
                  >
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                      <span className="text-red-600 font-bold text-lg">T</span>
                    </div>
                    <div>
                      <span className="font-semibold text-lg hover:text-red-600">Tiësto</span>
                      <div className="text-sm text-gray-500">EDM/Trance</div>
                    </div>
                    <span className="ml-auto text-sm bg-red-100 text-red-600 px-3 py-1 rounded-full">Confirmed</span>
                  </div>
                </div>
=======
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
>>>>>>> 14a745b47d1605977741684c88773018d0a304c4
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Event Info: Tickets / Venue / Travel */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Event Info</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-2">Tickets</div>
                  <div className="text-gray-800 mb-3">Official tickets and club passes are available on our Tickets page.</div>
                </div>

                <div>
                  <div className="text-sm text-gray-600 mb-2">Venue</div>
                  <div className="rounded overflow-hidden mb-3 border">
                    <iframe
                      title="Ibiza venues map"
                      src="https://www.google.com/maps?q=Ibiza&output=embed"
                      className="w-full h-36"
                      loading="lazy"
                    />
                  </div>
                  <a
                    href="https://www.google.com/maps/d/u/0/viewer?mid=1JHSHkIq0FUMYj7bGk_8Q1PZb8xQ&ll=38.916761%2C1.437954&z=12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Open full club map
                  </a>
                </div>

                <div>
                  <div className="text-sm text-gray-600 mb-2">Travel Guide</div>
                  <p className="text-gray-800 mb-3">Events take place across Ibiza's main club areas and beach towns — central hubs include Playa d'en Bossa, Ibiza Town, and Sant Antoni.</p>
                  <button onClick={() => navigate('travel-ibiza')} className="text-sm text-blue-600 hover:underline">View Travel Guide</button>
                </div>
              </div>
            </div>
            {/* Related Events */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <span className="w-2 h-5 bg-blue-600 rounded-full mr-2"></span>
                Other Events
              </h3>
              <div className="space-y-4">
                {/* Amsterdam Event */}
                <div 
                  onClick={() => navigate('amsterdam-page')}
                  className="p-4 bg-white rounded-lg hover:shadow-md transition cursor-pointer active:scale-[0.98]"
                >
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-gray-900">Amsterdam Dance Event 2025</h4>
                    <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                      Featured Event
                    </span>
                  </div>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <span className="mr-3">📍 Amsterdam • Oct 15-19, 2025</span>
                    <div className="ml-auto flex items-center space-x-2">
                      <button
                        onClick={(e) => { e.stopPropagation(); window.open('https://www.google.com/maps/d/u/0/viewer?mid=1V9_JcC3V38MT_c6GZHSXUv2THsM&ll=52.370216%2C4.895168&z=13', '_blank', 'noopener'); }}
                        className="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200"
                      >
                        Map
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); navigate('travel-amsterdam'); }}
                        className="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200"
                      >
                        Travel
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Tenerife Event */}
                <div 
                  onClick={() => navigate('tenerife-page')}
                  className="p-4 bg-white rounded-lg hover:shadow-md transition cursor-pointer active:scale-[0.98]"
                >
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-gray-900">Tenerife EDM Festival 2025</h4>
                    <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">
                      Winter Paradise
                    </span>
                  </div>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <span className="mr-3">📍 Tenerife • Dec 27-30, 2025</span>
                    <div className="ml-auto flex items-center space-x-2">
                      <button
                        onClick={(e) => { e.stopPropagation(); window.open('https://www.google.com/maps/d/u/0/viewer?mid=1FQn-V7C-RRj8Oc8as5SOrqRbtiU&ll=28.062343%2C-16.726051&z=13', '_blank', 'noopener'); }}
                        className="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200"
                      >
                        Map
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); navigate('travel-tenerife'); }}
                        className="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200"
                      >
                        Travel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ibiza Legends Spotlight */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
              <h3 className="font-bold text-lg mb-6">Ibiza Legends</h3>
              <div className="space-y-4">
                {producers.map((producer, index) => (
                  <div 
                    key={index} 
                    onClick={() => navigate(producer.bioKey)}
                    className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-lg hover:shadow-md transition cursor-pointer active:scale-[0.98] select-none"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${producer.color} flex items-center justify-center text-white font-bold text-sm mr-4`}>
                      {producer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{producer.name}</div>
                      <div className="text-sm text-gray-600">{producer.genre}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">Followers</div>
                      <div className="font-bold text-gray-900">{producer.followers}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links removed — Event Info card includes Tickets/Venue/Travel */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}