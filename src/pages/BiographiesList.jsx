import React from 'react';
import artists from '../data/artistsData';

export default function BiographiesList({ navigate }) {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <h1
            onClick={() => navigate('home')}
            className="text-2xl font-bold tracking-wide text-purple-600 cursor-pointer hover:text-purple-700 transition"
          >
            EchoWave
          </h1>
          <button
            onClick={() => navigate('home')}
            className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
          >
            ← Back to Home
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Biographies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(artists).map(([key, a]) => (
            <div
              key={key}
              onClick={() => navigate(key)}
              className="cursor-pointer border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img src={a.img || '/placeholder-artist.jpg'} alt={a.title} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{a.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{a.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
