import React from 'react';

function Events({ navigate }) {
  const allEvents = {
    'amsterdam-page': {
      title: 'Amsterdam Dance Event 2025',
      location: 'Amsterdam, Netherlands',
      date: 'October 15-19, 2025',
      image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1200&h=600&fit=crop&q=80',
      description: 'The world\'s leading electronic music festival and conference, transforming Amsterdam into a global dance music capital.',
      featuredArtists: ['Martin Garrix', 'Armin van Buuren', 'Amelie Lens', 'Charlotte de Witte', 'Nina Kraviz']
    },
    'tenerife-page': {
      title: 'Tenerife EDM Festival 2025',
      location: 'Playa de las Américas, Tenerife, Spain',
      date: 'December 27-30, 2025',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&h=600&fit=crop&q=80',
      description: 'Winter paradise festival with beachfront venues and perfect weather for electronic music lovers.',
      featuredArtists: ['Afrojack', 'Zedd', 'Alesso', 'Kygo', 'David Guetta']
    },
    'ibiza-page': {
      title: 'Ibiza Opening Parties 2025',
      location: 'Ibiza, Spain',
      date: 'May 2-4, 2025',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=600&fit=crop&q=80',
      description: 'The official start of Ibiza\'s clubbing season with spectacular shows across legendary venues.',
      featuredArtists: ['R3hab', 'Calvin Harris', 'The Chainsmokers', 'Tiësto', 'Alesso']
    }
  };

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
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover the most anticipated electronic music festivals and events around the world.
          </p>
        </div>

        {/* Events Grid */}
        <div className="space-y-12">
          {Object.entries(allEvents).map(([key, event]) => (
            <div 
              key={key}
              onClick={() => navigate(key)}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer active:scale-[0.99]"
            >
              <div className="md:flex">
                {/* Event Image */}
                <div className="md:w-1/3">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                
                {/* Event Details */}
                <div className="md:w-2/3 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        FEATURED EVENT
                      </span>
                      <h2 className="text-2xl font-bold mb-2 hover:text-purple-600">{event.title}</h2>
                    </div>
                    <span className="text-sm font-medium text-purple-600">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-6">
                    <span className="mr-4">📍 {event.location}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{event.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Featured Artists:</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.featuredArtists.map((artist, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {artist}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-semibold">
                      View Event Details →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Events;