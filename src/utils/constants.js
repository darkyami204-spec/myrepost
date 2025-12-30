// Latest Posts
const LATEST_POSTS = [
  {
    id: 1,
    title: "Tomorrowland 2025 Announced",
    description: "The biggest EDM festival returns with new stages.",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800",
  },
  {
    id: 2,
    title: "Ibiza Opening Parties",
    description: "Ibiza clubs kick off the summer season.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
  },
  {
    id: 3,
    title: "EDC Las Vegas Highlights",
    description: "A look back at the most iconic moments.",
    image: "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?w=800",
  },
];

// Event Producers
const AMSTERDAM_PRODUCERS = [
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

const TENERIFE_PRODUCERS = [
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

const IBIZA_PRODUCERS = [
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

// Events Data
const EVENTS_DATA = {
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

export {
  LATEST_POSTS,
  AMSTERDAM_PRODUCERS,
  TENERIFE_PRODUCERS,
  IBIZA_PRODUCERS,
  EVENTS_DATA
};