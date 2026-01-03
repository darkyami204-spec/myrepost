import React from 'react';

export default function LineupPreview({ artists, onArtistClick, title = "Featured Artists" }) {
  return (
    <div className="mt-10">
      <h3 className="font-bold text-xl mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {artists.map((artist, index) => (
          <div
            key={index}
            onClick={() => onArtistClick && onArtistClick(artist)}
            className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition duration-300 cursor-pointer active:scale-[0.98]"
          >
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
              <span className="text-purple-600 font-bold text-lg">
                {artist.name.charAt(0)}
              </span>
            </div>
            <div>
              <span className="font-semibold text-lg hover:text-purple-600">
                {artist.name}
              </span>
              <div className="text-sm text-gray-500">{artist.genre}</div>
            </div>
            <span className="ml-auto text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
              Confirmed
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Compact Lineup List (for sidebars)
export function CompactLineupList({ artists, onArtistClick, title = "Artists" }) {
  return (
    <div>
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      <div className="space-y-2">
        {artists.map((artist, index) => (
          <div
            key={index}
            onClick={() => onArtistClick && onArtistClick(artist)}
            className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-sm transition cursor-pointer"
          >
            <div>
              <p className="font-semibold text-sm">{artist.name}</p>
              <p className="text-xs text-gray-500">{artist.genre}</p>
            </div>
            <span className="text-xs text-purple-600">→</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Full Lineup Section with Categories
export function CategorizedLineup({ lineup, onArtistClick }) {
  return (
    <div className="space-y-8">
      {Object.entries(lineup).map(([category, artists]) => (
        <div key={category}>
          <h3 className="text-xl font-bold mb-4 text-gray-900">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {artists.map((artist, index) => (
              <div
                key={index}
                onClick={() => onArtistClick && onArtistClick(artist)}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold text-sm mr-3">
                    {artist.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{artist.name}</p>
                    <p className="text-xs text-gray-500">{artist.genre}</p>
                  </div>
                </div>
                {artist.time && (
                  <p className="text-xs text-gray-400 mt-2">🕐 {artist.time}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Lineup Grid with Images
export function LineupGrid({ artists, onArtistClick, columns = 4 }) {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5'
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {artists.map((artist, index) => (
        <div
          key={index}
          onClick={() => onArtistClick && onArtistClick(artist)}
          className="group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-lg mb-3">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
          </div>
          <h4 className="font-semibold text-center group-hover:text-purple-600 transition">
            {artist.name}
          </h4>
          <p className="text-sm text-gray-500 text-center">{artist.genre}</p>
        </div>
      ))}
    </div>
  );
}

// Timeline-based Lineup (for day schedules)
export function LineupTimeline({ schedule, onArtistClick }) {
  return (
    <div className="space-y-6">
      {schedule.map((slot, index) => (
        <div key={index} className="flex gap-4">
          <div className="w-20 flex-shrink-0">
            <p className="text-sm font-semibold text-gray-900">{slot.time}</p>
            <p className="text-xs text-gray-500">{slot.stage}</p>
          </div>
          <div className="flex-1">
            <div
              onClick={() => onArtistClick && onArtistClick(slot.artist)}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer border-l-4 border-purple-500"
            >
              <h4 className="font-semibold text-lg mb-1">{slot.artist.name}</h4>
              <p className="text-sm text-gray-600">{slot.artist.genre}</p>
              {slot.special && (
                <span className="inline-block mt-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                  {slot.special}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}