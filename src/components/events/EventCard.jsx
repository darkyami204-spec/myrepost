import React from 'react';

export default function EventCard({ event, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer active:scale-[0.98]"
    >
      <img 
        src={event.image} 
        alt={event.title}
        className="w-full h-48 object-cover" 
      />
      <div className="p-4">
        <h4 className="font-bold text-lg mb-2">{event.title}</h4>
        <p className="text-gray-600 text-sm">{event.description}</p>
      </div>
    </div>
  );
}

// Featured Event Card (larger, with overlay)
export function FeaturedEventCard({ event, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition"
    >
      <img 
        src={event.image}
        alt={event.title}
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
        <span className="inline-block bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
          {event.badge || 'FEATURED EVENT'}
        </span>
        <h1 className="text-3xl font-bold text-white">{event.title}</h1>
        <p className="text-gray-200 mt-2">{event.date} • {event.venue} • {event.location}</p>
      </div>
    </div>
  );
}

// Related Event Card (compact version)
export function RelatedEventCard({ event, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="p-4 bg-white rounded-lg hover:shadow-md transition cursor-pointer active:scale-[0.98]"
    >
      <div className="flex justify-between items-start">
        <h4 className="font-medium text-gray-900">{event.title}</h4>
        <span className={`text-xs px-2 py-1 rounded ${
          event.category === 'Winter Paradise' 
            ? 'bg-orange-100 text-orange-600' 
            : 'bg-blue-100 text-blue-600'
        }`}>
          {event.category}
        </span>
      </div>
      <div className="flex items-center mt-2 text-sm text-gray-500">
        <span>📍 {event.location} • {event.date}</span>
      </div>
    </div>
  );
}

// Event Details Section
export function EventDetails({ event }) {
  return (
    <div className="bg-gray-50 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">About the Event</h2>
      <div className="space-y-6 text-gray-700 text-lg">
        {event.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}