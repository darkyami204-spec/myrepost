import React from 'react';

export default function ArtistCard({ artist, onClick, confirmed = false }) {
  return (
    <div 
      onClick={onClick}
      className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition duration-300 cursor-pointer active:scale-[0.98]"
    >
      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
        <span className="text-purple-600 font-bold text-lg">
          {artist.name.charAt(0)}
        </span>
      </div>
      <div>
        <span className="font-semibold text-lg hover:text-purple-600">{artist.name}</span>
        <div className="text-sm text-gray-500">{artist.genre}</div>
      </div>
      {confirmed && (
        <span className="ml-auto text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
          Confirmed
        </span>
      )}
    </div>
  );
}

// Producer/Artist Spotlight Card (with gradient avatar)
export function ProducerCard({ producer, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-lg hover:shadow-md transition cursor-pointer active:scale-[0.98] select-none"
    >
      <div 
        className={`w-12 h-12 rounded-full bg-gradient-to-r ${producer.color} flex items-center justify-center text-white font-bold text-sm mr-4`}
      >
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
  );
}

// Simple Producer Selector (for sidebars)
export function ProducerSelector({ producer, onClick, isActive = false }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-3 rounded-lg transition border border-gray-200 ${
        isActive 
          ? 'bg-purple-50 border-purple-300' 
          : 'hover:bg-white hover:shadow-md'
      }`}
    >
      <p className="font-semibold text-sm">{producer.name}</p>
      <p className="text-xs text-gray-500">{producer.genre}</p>
    </button>
  );
}

// Artist Bio Modal/Preview Card
export function ArtistBioPreview({ artist, onReadMore }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <img 
        src={artist.image}
        alt={artist.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
      <p className="text-purple-600 font-semibold mb-3">{artist.genre}</p>
      <p className="text-gray-700 text-sm mb-4 line-clamp-3">{artist.bio}</p>
      <button 
        onClick={onReadMore}
        className="text-purple-600 font-semibold text-sm hover:text-purple-700 transition"
      >
        Read Full Biography →
      </button>
    </div>
  );
}