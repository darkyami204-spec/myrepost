import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { EventDetails } from '../components/events/EventCard';
import ArtistCard from '../components/events/ArtistCard';
import { ProducerCard } from '../components/events/ArtistCard';

export default function EventTenerife({ navigate }) {
  const producers = [
    { 
      name: 'Afrojack', 
      followers: '12M', 
      genre: 'Electro House', 
      bioKey: 'afrojack-bio',
      color: 'from-yellow-400 to-orange-500'
    },
    { 
      name: 'Zedd', 
      followers: '10M', 
      genre: 'Progressive House', 
      bioKey: 'zedd-bio',
      color: 'from-blue-400 to-purple-500'
    },
    { 
      name: 'Alesso', 
      followers: '9M', 
      genre: 'Progressive House', 
      bioKey: 'alesso-bio',
      color: 'from-red-400 to-pink-500'
    },
    { 
      name: 'Kygo', 
      followers: '18M', 
      genre: 'Tropical House', 
      bioKey: 'kygo-bio',
      color: 'from-green-400 to-teal-500'
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
      "Tenerife EDM Festival transforms the Canary Islands' largest island into a winter paradise for electronic music lovers. Set against stunning volcanic landscapes and pristine beaches, this festival brings world-class DJs to one of Europe's most beautiful destinations.",
      "With stages on the beach, in the mountains, and across the island's best venues, Tenerife EDM Festival offers a unique combination of incredible music, perfect weather, and unforgettable island vibes.",
      "The festival features multiple stages showcasing different genres from tropical house to hard techno, boat parties, sunrise sessions, and exclusive afterparties at Tenerife's most iconic clubs."
    ]
  };

  const featuredArtists = [
    { name: 'Afrojack', genre: 'Electro House' },
    { name: 'Zedd', genre: 'Progressive House' },
    { name: 'Alesso', genre: 'Progressive House' },
    { name: 'Kygo', genre: 'Tropical House' }
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
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop&q=80"
                alt="Tenerife beach sunset"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <span className="inline-block bg-orange-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
                  WINTER PARADISE
                </span>
                <h1 className="text-3xl font-bold text-white">Tenerife EDM Festival 2025</h1>
                <p className="text-gray-200 mt-2">December 27-30, 2025 • Playa de las Américas • Tenerife, Canary Islands</p>
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
                    onClick={() => navigate(artist.name.toLowerCase().replace(' ', '-') + '-bio')}
                    confirmed={true}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Event Highlights */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100">
              <h3 className="font-bold text-lg mb-4">Festival Highlights</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🏖️</span>
                  <span>Beach stages with ocean views</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🌅</span>
                  <span>Sunrise sessions on Mount Teide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🚤</span>
                  <span>Exclusive boat parties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🌴</span>
                  <span>Tropical paradise setting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">☀️</span>
                  <span>Perfect winter weather</span>
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
                <a href="#" className="flex items-center p-3 hover:bg-orange-50 rounded-lg transition duration-300 group">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 group-hover:scale-125 transition"></span>
                  <span className="font-medium">Ticket Information</span>
                  <span className="ml-auto text-orange-600">→</span>
                </a>
                <a href="#" className="flex items-center p-3 hover:bg-orange-50 rounded-lg transition duration-300 group">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 group-hover:scale-125 transition"></span>
                  <span className="font-medium">Accommodation</span>
                  <span className="ml-auto text-orange-600">→</span>
                </a>
                <a href="#" className="flex items-center p-3 hover:bg-orange-50 rounded-lg transition duration-300 group">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 group-hover:scale-125 transition"></span>
                  <span className="font-medium">Travel Guide</span>
                  <span className="ml-auto text-orange-600">→</span>
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