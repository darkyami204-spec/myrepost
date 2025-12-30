import React from 'react';

function Producers({ navigate }) {
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
    },
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
    },
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
    }
  ];

  // Group producers by genre
  const producersByGenre = {
    'Dutch Producers': producers.filter(p => 
      p.name.includes('Garrix') || 
      p.name.includes('Armin') || 
      p.name.includes('Afrojack') || 
      p.name.includes('Tiësto') || 
      p.name.includes('R3hab')
    ),
    'Techno Artists': producers.filter(p => 
      p.name.includes('Lens') || 
      p.name.includes('Charlotte') || 
      p.name.includes('Nina')
    ),
    'International Superstars': producers.filter(p => 
      p.name.includes('Zedd') || 
      p.name.includes('Alesso') || 
      p.name.includes('Kygo') || 
      p.name.includes('David') || 
      p.name.includes('Calvin') || 
      p.name.includes('Chainsmokers')
    )
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Top Producers</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover the world's most influential electronic music producers and DJs.
          </p>
        </div>

        {/* Producers by Genre */}
        {Object.entries(producersByGenre).map(([genre, genreProducers]) => (
          <div key={genre} className="mb-16">
            <h2 className="text-2xl font-bold mb-8 border-l-4 border-purple-600 pl-4">{genre}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {genreProducers.map((producer, index) => (
                <div 
                  key={index} 
                  onClick={() => navigate(producer.bioKey)}
                  className="flex items-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition duration-300 cursor-pointer active:scale-[0.98]"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${producer.color} flex items-center justify-center text-white font-bold text-lg mr-4`}>
                    {producer.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg hover:text-purple-600">{producer.name}</div>
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
        ))}
      </main>
    </div>
  );
}

export default Producers;