import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { FeaturedEventCard, RelatedEventCard, EventDetails } from '../components/events/EventCard';
import ArtistCard from '../components/events/ArtistCard';
import { ProducerCard } from '../components/events/ArtistCard';

export default function EventAmsterdam({ navigate }) {
  const producers = [
    { 
      name: 'Martin Garrix', 
      followers: '15M', 
      genre: 'Progressive House', 
      bioKey: 'martin-garrix-bio',
      color: 'from-blue-400 to-purple-500'
    },
    { 
      name: 'Armin van Buuren', 
      followers: '8M', 
      genre: 'Trance', 
      bioKey: 'armin-bio',
      color: 'from-green-400 to-blue-500'
    },
    { 
      name: 'Amelie Lens', 
      followers: '3M', 
      genre: 'Techno', 
      bioKey: 'amelie-lens-bio',
      color: 'from-pink-400 to-red-500'
    },
    { 
      name: 'Charlotte de Witte', 
      followers: '4M', 
      genre: 'Techno', 
      bioKey: 'charlotte-bio',
      color: 'from-purple-400 to-indigo-500'
    },
    { 
      name: 'Nina Kraviz', 
      followers: '2M', 
      genre: 'Techno', 
      bioKey: 'nina-bio',
      color: 'from-teal-400 to-cyan-500'
    }
  ];

  const eventDetails = {
    description: [
      "Amsterdam Dance Event (ADE) is the world's leading electronic music festival and conference, transforming the entire city of Amsterdam into a global dance music capital for five days and nights.",
      "With over 2,500 artists performing across 200 venues and attracting more than 400,000 visitors from around the globe, ADE represents the pinnacle of electronic music culture, business, and innovation.",
      "From intimate club showcases to massive arena events, exclusive label nights, cutting-edge technology demonstrations, and the industry's most important business conference, ADE offers something for every electronic music enthusiast."
    ]
  };

  const featuredArtists = [
    { name: 'Martin Garrix', genre: 'Progressive House' },
    { name: 'Amelie Lens', genre: 'Techno' },
    { name: 'Charlotte de Witte', genre: 'Techno' },
    { name: 'Nina Kraviz', genre: 'Techno' }
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
                src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1200&h=600&fit=crop&q=80"
                alt="Amsterdam canals at night with lights"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <span className="inline-block bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
                  FEATURED EVENT
                </span>
                <h1 className="text-3xl font-bold text-white">Amsterdam Dance Event 2025</h1>
                <p className="text-gray-200 mt-2">October 15-19, 2025 • Multiple Venues • Amsterdam, Netherlands</p>
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
            {/* Related Events */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <span className="w-2 h-5 bg-purple-600 rounded-full mr-2"></span>
                Other Events
              </h3>
              <div className="space-y-4">
                <RelatedEventCard
                  event={{
                    title: 'Tenerife EDM Festival 2025',
                    category: 'Winter Paradise',
                    location: 'Playa de las Américas',
                    date: 'Dec 27-30, 2025'
                  }}
                  onClick={() => navigate('tenerife-page')}
                />
                <RelatedEventCard
                  event={{
                    title: 'Ibiza Opening Parties 2025',
                    category: 'Summer Season',
                    location: 'Ibiza',
                    date: 'May 2-4, 2025'
                  }}
                  onClick={() => navigate('ibiza-page')}
                />
              </div>
            </div>

            {/* Producers Spotlight */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <h3 className="font-bold text-lg mb-6">Dutch Producers Spotlight</h3>
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
                <a href="#" className="flex items-center p-3 hover:bg-purple-50 rounded-lg transition duration-300 group">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 group-hover:scale-125 transition"></span>
                  <span className="font-medium">Ticket Information</span>
                  <span className="ml-auto text-purple-600">→</span>
                </a>
                <a 
                  href="https://www.google.com/maps/d/u/0/viewer?mid=1V9_JcC3V38MT_c6GZHSXUv2THsM&ll=52.370216%2C4.895168&z=13" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-3 hover:bg-purple-50 rounded-lg transition duration-300 group"
                >
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 group-hover:scale-125 transition"></span>
                  <span className="font-medium">Venue Map</span>
                  <span className="ml-auto text-purple-600">→</span>
                </a>
                <a 
                  href="https://www.google.com/travel/things-to-do?dest_mid=%2Fm%2F0212s&dest_state_type=main&dest_src=yts&q=amsterdam+travel+guide" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-3 hover:bg-purple-50 rounded-lg transition duration-300 group"
                >
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 group-hover:scale-125 transition"></span>
                  <span className="font-medium">Travel Guide</span>
                  <span className="ml-auto text-purple-600">→</span>
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