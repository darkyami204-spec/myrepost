
function Footer() {
  return (
    <footer className="border-t border-gray-200 px-8 py-6 text-center text-sm text-gray-600">
      <p>© 2025 EchoWave. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
          Instagram
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
          Twitter
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
          Facebook
        </a>
      </div>
    </footer>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [genreOpen, setGenreOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [exclusivesOpen, setExclusivesOpen] = useState(false);

  // ---- Browser history support ----
  useEffect(() => {
    window.history.replaceState({ page: currentPage }, '', '');

    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    window.history.pushState({ page }, '', '');
    // Close dropdowns when navigating
    setGenreOpen(false);
    setEventsOpen(false);
    setExclusivesOpen(false);
  };
  // ---------------------------------

  const latestPosts = [
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

  const articles = {
    'skrillex-article': {
      title: 'Skrillex Announces New Album "Quest for Fire"',
      author: 'Maid Razić a.k.a. Diam • Dec 8, 2025',
      img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80',
      content: [
        'After years of anticipation, Skrillex has officially announced his new studio album, Quest for Fire.',
        'The album represents a creative rebirth, blending his signature bass-heavy roots with refined sound design, genre-bending collaborations, and experimental electronic elements.',
        'Quest for Fire features collaborations with artists across EDM, hip-hop, and alternative genres, incorporating analog synthesizers and live instrumentation for a more organic feel.',
        'Fans and critics alike have described the project as both aggressive and emotional — a return to form that captures the raw energy of his early work while exploring new sonic landscapes.',
        'Skrillex himself states that Quest for Fire is his most personal project to date, reflecting his growth as an artist and his willingness to take creative risks.',
        'Beyond the music, the album rollout includes interactive experiences, exclusive listening parties, and visual storytelling elements to immerse fans in the world of Quest for Fire.',
        'Skrillex isn\'t just back — he\'s redefining himself, showing that electronic music can evolve while staying true to its roots.'
      ],
      summary: 'Skrillex announces his new album "Quest for Fire" — a creative rebirth blending bass-heavy roots with genre-bending collaborations.'
    },
    'martin-garrix-article': {
      title: 'Martin Garrix Launches New Label: STMPD RCRDS Vol. 2',
      author: 'Tarik Hodžić • Dec 3, 2025',
      img: 'https://images.unsplash.com/photo-1525286116112-b59af11adad1?w=1200&q=80',
      content: [
        'Martin Garrix officially unveils STMPD RCRDS Vol. 2, expanding his creative empire and solidifying his role as a mentor for emerging talent.',
        'The new release showcases a diverse roster of artists, spanning progressive house, future bass, and experimental EDM, reflecting Garrix\'s commitment to innovation.',
        'STMPD RCRDS Vol. 2 emphasizes collaboration, offering rising artists guidance in production, marketing, and live performance.',
        'Garrix explains that this label chapter focuses on giving creatives freedom while maintaining a cohesive sonic identity, blending established sounds with fresh experimentation.',
        'The album launch is accompanied by exclusive livestream performances, behind-the-scenes studio sessions, and fan-interactive events.',
        'This milestone not only highlights Garrix\'s entrepreneurial growth but also his dedication to shaping the future of electronic music.',
        'STMPD RCRDS Vol. 2 is more than a label — it\'s a platform for innovation, community, and artistic evolution.'
      ],
      summary: 'Martin Garrix launches the second chapter of his label STMPD RCRDS, supporting emerging artists while pushing innovative electronic music.'
    },
    'ultra-article': {
      title: 'Ultra Europe Expands to New Venues',
      author: 'EchoWave Team • Dec 5, 2025',
      img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200',
      content: [
        'Ultra Europe festival is growing bigger than ever, adding new beach stages and increasing overall capacity to welcome more EDM fans from around the globe.',
        'The organizers have redesigned the festival layout to enhance crowd flow, accessibility, and stage visibility, ensuring a better experience for attendees.',
        'The expansion also includes upgraded VIP areas, premium lounges, and exclusive backstage experiences for fans seeking a more immersive encounter with the artists.',
        'Ultra Europe has partnered with international artists and performers to deliver unique sets, live visuals, and surprise collaborations across multiple stages.',
        'In addition to music, the festival now features art installations, wellness zones, and culinary experiences, making it a holistic celebration of culture and music.',
        'Safety and sustainability are a priority, with improved security measures, green initiatives, and eco-friendly infrastructure to minimize the festival\'s environmental footprint.',
        'This expansion marks a new chapter for Ultra Europe, solidifying its position as one of Europe\'s most iconic and forward-thinking EDM festivals.'
      ],
      summary: 'Ultra Europe expands with new beach stages and higher capacity, promising an even bigger EDM festival experience in Split, Croatia.'
    }
  };

  const artists = {
    'martin-garrix-bio': {
      title: 'Martin Garrix: The Dutch Prodigy',
      author: 'EchoWave Team • Jan 10, 2025',
      img: 'https://dynamicmedia.livenationinternational.com/u/p/v/2acb5db0-fee0-4b3e-a462-18d82f529191.jpg?format=webp&width=3840&quality=75',
      content: [
        'Martin Garrix is a Dutch DJ, producer, and songwriter who has become one of the most influential figures in modern electronic dance music. Born Martijn Gerard Garritsen on May 14, 1996, in Amstelveen, Netherlands, he broke onto the global scene at just 17 years old with his explosive 2013 hit "Animals," a track that redefined big-room EDM and became a festival anthem worldwide.',
        '## The Early Years',
        'Growing up in Amstelveen, just outside Amsterdam, Garrix showed an early interest in music. He began playing guitar at age 8 and started experimenting with digital audio workstations by 11. His musical education included studying at the Herman Brood Academy, a prestigious music production school in Utrecht, where he honed his production skills and developed his signature sound.',
        '## Global Breakthrough with "Animals"',
        'Released in 2013, "Animals" became an instant global phenomenon. The track\'s minimalistic yet powerful drop, featuring a distinctive synth lead and driving bassline, captured the energy of the big-room house movement. It topped charts in over 10 countries, including the UK, Belgium, and his native Netherlands, and has since been certified multi-platinum in numerous territories. The success of "Animals" catapulted Garrix from an unknown teenager to an international star virtually overnight.',
        '## Musical Evolution and Versatility',
        'Known for his high-energy sound, melodic drops, and constant evolution, Garrix has collaborated with some of the biggest names in music, including Dua Lipa ("Scared to Be Lonely"), Khalid ("Ocean"), Usher ("Don\'t Look Down"), Bonn, and David Guetta. His versatility spans progressive house, future bass, pop, and club-driven EDM, allowing him to dominate both mainstream charts and underground festival stages.',
        '## STMPD RCRDS: Building an Empire',
        'In 2016, seeking creative independence, Garrix founded his own label, STMPD RCRDS. The label name comes from "stamped records," reflecting his desire to leave a lasting mark on the industry. STMPD RCRDS has grown into a respected force in the electronic music industry, showcasing both established artists and emerging talent while maintaining Garrix\'s commitment to musical innovation.',
        '## Festival Dominance and Awards',
        'A regular headliner at the world\'s biggest festivals—such as Tomorrowland, Ultra Music Festival, and Coachella—Martin Garrix has repeatedly been ranked #1 DJ in the world by DJ Mag\'s Top 100 DJs poll. His visually stunning live shows, featuring synchronized fireworks, lasers, and massive LED screens, have set new standards for festival production.',
        '## Legacy and Influence',
        'Despite his massive success, Garrix remains known for his humility, passion for music, and relentless work ethic. He has become a role model for aspiring producers worldwide, proving that age is no barrier to artistic achievement. Today, Martin Garrix continues to push the boundaries of EDM, shaping the sound of a new generation while staying true to the energy that launched his career.',
        '## Key Achievements',
        '- Youngest DJ ever to headline Tomorrowland (age 17)',
        '- Multiple #1 rankings in DJ Mag\'s Top 100 DJs poll',
        '- Over 10 billion streams across platforms',
        '- Performances at three consecutive Olympic closing ceremonies',
        '- Collaboration with the Dutch National Opera for a unique classical-electronic fusion project'
      ],
      summary: 'From teenage prodigy to global EDM icon, Martin Garrix has redefined electronic music with hits like "Animals" and built an empire with his label STMPD RCRDS.'
    },
    // ... (include ALL other artists from your original code)
  };

  // ---------------- HOME PAGE ----------------
  if (currentPage === 'home') {
    return (
      <div className="bg-white text-black font-sans">

        {/* NAVBAR */}
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

              {/* GENRE */}
              <div
                className="relative"
                onMouseEnter={() => setGenreOpen(true)}
                onMouseLeave={() => setGenreOpen(false)}
              >
                <button className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition flex items-center gap-1">
                  Genre <span className="text-xs">▼</span>
                </button>
                {genreOpen && (
                  <div className="absolute left-0 top-full w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Progressive</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Future</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Bass</a>
                  </div>
                )}
              </div>

              {/* EVENTS */}
              <div
                className="relative"
                onMouseEnter={() => setEventsOpen(true)}
                onMouseLeave={() => setEventsOpen(false)}
              >
                <button className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition flex items-center gap-1">
                  Events <span className="text-xs">▼</span>
                </button>
                {eventsOpen && (
                  <div className="absolute left-0 top-full w-44 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <button onClick={() => navigate('amsterdam-page')} className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full">Amsterdam</button>
                    <button onClick={() => navigate('tenerife-page')} className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full">Tenerife</button>
                    <button onClick={() => navigate('ibiza-page')} className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full">Ibiza</button>
                  </div>
                )}
              </div>

              <a href="#" className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
                Playlist
              </a>

              {/* EXCLUSIVES */}
              <div
                className="relative"
                onMouseEnter={() => setExclusivesOpen(true)}
                onMouseLeave={() => setExclusivesOpen(false)}
              >
                <button className="px-4 py-2 rounded-lg text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 transition flex items-center gap-1">
                  Exclusives <span className="text-xs">▼</span>
                </button>
                {exclusivesOpen && (
                  <div className="absolute right-0 top-full w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Biography</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Discounts</a>
                  </div>
                )}
              </div>

              <button
                onClick={() => navigate('login')}
                className="ml-6 px-4 py-2 rounded-lg text-sm font-semibold bg-purple-600 text-white hover:bg-purple-700 transition"
              >
                Log In
              </button>
              <button
                onClick={() => navigate('signup')}
                className="px-4 py-2 rounded-lg text-sm font-semibold bg-purple-600 text-white hover:bg-purple-700 transition"
              >
                Sign Up
              </button>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="h-[80vh] flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            Feel the <span className="text-purple-600">Echo</span> of EDM
          </h2>
          <p className="max-w-xl text-gray-600 mb-8">
            Your source for EDM news, festival coverage, artist spotlights and underground sounds.
          </p>
          <a href="#" className="bg-purple-600 hover:bg-purple-700 transition px-8 py-3 rounded-full font-semibold text-white">
            Explore Posts
          </a>
        </section>

        {/* LATEST POSTS */}
        <section className="px-8 py-16">
          <h3 className="text-3xl font-bold mb-10 text-center">Latest Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {latestPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <img src={post.image} className="w-full h-48 object-cover" alt={post.title} />
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2">{post.title}</h4>
                  <p className="text-gray-600 text-sm">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        
        <section className="px-8 py-16 bg-gray-50">
          <h3 className="text-3xl font-bold mb-10 text-center">Recent Articles</h3>
          <div className="space-y-8 max-w-4xl mx-auto">
            {Object.entries(articles)
              .filter(([key]) => !key.includes('-bio'))
              .map(([key, article]) => (
                <div key={key} className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
                  <img src={article.img} className="w-full h-56 object-cover" alt={article.title} />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-2xl font-bold">{article.title}</h4>
                      <span className="text-sm text-gray-500">{article.author.split('•')[1]}</span>
                    </div>
                    <p className="text-sm text-purple-600 font-semibold mb-3">
                      📍 {article.author.split('•')[0]}
                    </p>
                    <p className="text-gray-600 mb-4">{article.summary}</p>
                    <button
                      onClick={() => navigate(key)}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
                    >
                      Read More
                    </button>
                  </div>
                </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // ---------------- LOGIN PAGE ----------------
  if (currentPage === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Back Button */}
          <button
            onClick={() => navigate('home')}
            className="flex items-center text-purple-600 hover:text-purple-800 mb-8 group"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home
          </button>

          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
                <span className="text-2xl text-white font-bold">EW</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
              <p className="text-gray-600 mt-2">Sign in to your EchoWave account</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-600" />
                  <span className="ml-2 text-sm text-gray-700">Remember me</span>
                </label>
                <a href="#" className="text-sm text-purple-600 hover:text-purple-800 font-medium">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition duration-300"
              >
                Sign In
              </button>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <span className="mr-2">🎵</span>
                  Spotify
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <span className="mr-2">🔗</span>
                  SoundCloud
                </button>
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <button
                    onClick={() => navigate('signup')}
                    className="text-purple-600 hover:text-purple-800 font-medium"
                  >
                    Sign up
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- SIGNUP PAGE ----------------
  if (currentPage === 'signup') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Back Button */}
          <button
            onClick={() => navigate('home')}
            className="flex items-center text-purple-600 hover:text-purple-800 mb-8 group"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home
          </button>

          {/* Signup Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                <span className="text-2xl text-white font-bold">EW</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Join EchoWave</h2>
              <p className="text-gray-600 mt-2">Create your account to start exploring</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  placeholder="••••••••"
                />
                <p className="mt-2 text-xs text-gray-500">
                  Must be at least 8 characters with a number and special character
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Favorite Music Genre
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition">
                  <option>Select a genre</option>
                  <option>House</option>
                  <option>Techno</option>
                  <option>Trance</option>
                  <option>Dubstep</option>
                  <option>Drum & Bass</option>
                  <option>Progressive</option>
                </select>
              </div>

              <label className="flex items-start">
                <input type="checkbox" className="mt-1 rounded text-blue-600 focus:ring-blue-600" />
                <span className="ml-2 text-sm text-gray-700">
                  I agree to the{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Privacy Policy
                  </a>
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition duration-300"
              >
                Create Account
              </button>

              <div className="text-center mt-8">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <button
                    onClick={() => navigate('login')}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- ARTICLE/BIOGRAPHY PAGES ----------------
  const renderArticleOrBio = (key) => {
    const article = articles[key] || artists[key];
    if (!article) {
      return (
        <div className="min-h-screen bg-white">
          <h2>Article not found</h2>
          <button onClick={() => navigate('home')}>Back to Home</button>
        </div>
      );
    }

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

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-purple-600 hover:text-purple-800 mb-8 group"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
            Back
          </button>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="font-medium text-purple-600">EXCLUSIVE</span>
              <span className="mx-2">•</span>
              <span>{article.author.split('•')[1]?.trim()}</span>
              {article.author.split('•')[0]?.includes('a.k.a') && (
                <>
                  <span className="mx-2">•</span>
                  <span className="text-gray-400">{article.author.split('•')[0].trim()}</span>
                </>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
            <div className="flex items-center text-gray-600">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-bold">EW</span>
                </div>
                <div>
                  <div className="font-medium">{article.author.split('•')[0].split('a.k.a')[0].trim()}</div>
                  <div className="text-sm text-gray-500">{article.author.split('•')[1]?.trim()}</div>
                </div>
              </div>
              <div className="ml-auto flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <span className="text-xl">🔗</span>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <span className="text-xl">📱</span>
                </button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden shadow-lg mb-10">
            <img 
              src={article.img} 
              alt={article.title}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none mb-16">
            {article.content.map((paragraph, index) => (
              <div key={index} className="mb-8">
                {paragraph.startsWith('## ') ? (
                  <h3 className="text-2xl font-bold mt-12 mb-6 text-gray-800 border-l-4 border-purple-600 pl-4">
                    {paragraph.substring(3)}
                  </h3>
                ) : (
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                )}
              </div>
            ))}
          </article>

          {/* Share Section */}
          <div className="border-t border-gray-200 pt-8 mb-16">
            <h4 className="font-bold text-lg mb-4">Share this article</h4>
            <div className="flex space-x-4">
              <button className="p-3 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition">
                Twitter
              </button>
              <button className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Facebook
              </button>
              <button className="p-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition">
                Instagram
              </button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="border-t border-gray-200 pt-8">
            <h4 className="font-bold text-2xl mb-8">More from EchoWave</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(articles)
                .filter(([otherKey]) => otherKey !== key && otherKey.includes('-bio') === key.includes('-bio'))
                .slice(0, 2)
                .map(([otherKey, otherArticle]) => (
                  <div 
                    key={otherKey}
                    onClick={() => navigate(otherKey)}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition cursor-pointer"
                  >
                    <h5 className="font-bold text-lg mb-2 hover:text-purple-600">{otherArticle.title}</h5>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{otherArticle.summary}</p>
                    <div className="text-xs text-gray-500">{otherArticle.author.split('•')[1]?.trim()}</div>
                  </div>
                ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  };

  // Check if current page is an article/bio page
  if (currentPage.includes('article') || currentPage.includes('-bio')) {
    return renderArticleOrBio(currentPage);
  }

  // Default fallback (should not reach here)
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Page not found</h2>
        <button
          onClick={() => navigate('home')}
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default App;