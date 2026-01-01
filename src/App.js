import { useState, useEffect } from 'react';
import EventAmsterdam from './pages/EventAmsterdam';
import EventIbiza from './pages/EventIbiza';
import EventTenerife from './pages/EventTenerife';
import Progressive from './pages/Progressive';
import Future from './pages/Future';
import Bass from './pages/Bass';
import Tomorrowland from './pages/Tomorrowland';
import IbizaOpening from './pages/IbizaOpening';
import EDCLasVegas from './pages/EDCLasVegas';
<<<<<<< HEAD
import Biography from './pages/Biography';
import BiographiesList from './pages/BiographiesList';
import Tickets from './pages/Tickets';
import TicketsLanding from './pages/TicketsLanding';
import TicketsCheckout from './pages/TicketsCheckout';
import TravelAmsterdam from './pages/TravelAmsterdam';
import TravelIbiza from './pages/TravelIbiza';
import TravelTenerife from './pages/TravelTenerife';
=======
>>>>>>> 14a745b47d1605977741684c88773018d0a304c4
import articles from './data/articlesData';
import artists from './data/artistsData';
import latestPosts from './data/latestPosts';

function Footer() {
  return (
    <footer className="border-t border-gray-200 px-8 py-6 text-center text-sm text-gray-600">
      <p>© 2025 EchoWave. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Twitter</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Facebook</a>
      </div>
    </footer>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [genreOpen, setGenreOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [exclusivesOpen, setExclusivesOpen] = useState(false);

  const pathFromPage = (page) => {
    if (!page || page === 'home') return '/';
    if (page === 'amsterdam-page') return '/amsterdam';
    if (page === 'ibiza-page') return '/ibiza';
    if (page === 'tenerife-page') return '/tenerife';
<<<<<<< HEAD
    if (page === 'tickets') return '/tickets';
    if (page === 'travel-amsterdam') return '/travel-amsterdam';
    if (page === 'travel-ibiza') return '/travel-ibiza';
    if (page === 'travel-tenerife') return '/travel-tenerife';
=======
>>>>>>> 14a745b47d1605977741684c88773018d0a304c4
    if (page === 'login') return '/login';
    if (page === 'signup') return '/signup';
    if (page.includes('-article')) return `/article/${page}`;
    if (page.includes('-bio')) return `/bio/${page}`;
    return `/${page}`;
  };

  const pageFromPath = (path) => {
    if (!path || path === '/') return 'home';
    const parts = path.replace(/^\//, '').split('/');
    if (parts[0] === 'article' && parts[1]) return parts[1];
    if (parts[0] === 'bio' && parts[1]) return parts[1];
    if (parts[0] === 'amsterdam') return 'amsterdam-page';
    if (parts[0] === 'ibiza') return 'ibiza-page';
    if (parts[0] === 'tenerife') return 'tenerife-page';
<<<<<<< HEAD
    if (parts[0] === 'tickets') return 'tickets';
    if (parts[0] === 'travel-amsterdam') return 'travel-amsterdam';
    if (parts[0] === 'travel-ibiza') return 'travel-ibiza';
    if (parts[0] === 'travel-tenerife') return 'travel-tenerife';
    if (parts[0] && parts[0].startsWith('checkout-')) return parts[0];
    if (parts[0] && parts[0].startsWith('tickets-')) return parts[0];
=======
>>>>>>> 14a745b47d1605977741684c88773018d0a304c4
    if (parts[0] === 'login') return 'login';
    if (parts[0] === 'signup' || parts[0] === 'sign-up') return 'signup';
    return 'not-found';
  };

  useEffect(() => {
    const initial = pageFromPath(window.location.pathname);
    setCurrentPage(initial);

    const handlePopState = () => {
      const p = pageFromPath(window.location.pathname);
      setCurrentPage(p);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    const url = pathFromPage(page);
    window.history.pushState({ page }, '', url);
    setGenreOpen(false);
    setEventsOpen(false);
    setExclusivesOpen(false);
  };

  

  

  

  // ---------------- HOME PAGE ----------------
  if (currentPage === 'home') {
    return (
      <div className="bg-white text-black font-sans">
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
                    <button onClick={() => navigate('progressive-page')} className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full">Progressive</button>
                    <button onClick={() => navigate('future-page')} className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full">Future</button>
                    <button onClick={() => navigate('bass-page')} className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full">Bass</button>
                  </div>
                )}
              </div>

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

              <button
                onClick={() => navigate('tickets')}
                className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
              >
                Tickets
              </button>

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
                    <button onClick={() => navigate('biographies')} className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full">Biography</button>
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

        <section className="px-8 py-16">
          <h3 className="text-3xl font-bold mb-10 text-center">Latest Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {latestPosts.map((post) => (
              <div key={post.id} onClick={() => navigate(post.slug)} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
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

<<<<<<< HEAD
  if (currentPage === 'tickets') {
    return (
      <TicketsLanding navigate={navigate} />
    );
  }

=======
>>>>>>> 14a745b47d1605977741684c88773018d0a304c4
  if (currentPage === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <button
            onClick={() => navigate('home')}
            className="flex items-center text-purple-600 hover:text-purple-800 mb-8 group"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home
          </button>

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

              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.152 6.896c-.438 0-.876.05-1.291.15 1.326 1.426 1.901 3.333 1.901 5.38 0 2.047-.575 3.954-1.901 5.38.415.1.853.15 1.291.15 2.744 0 4.96-2.226 4.96-4.964 0-2.739-2.216-4.96-4.96-4.96z"/>
                  </svg>
                  <span className="text-sm font-medium">Google</span>
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <span className="mr-2">🎵</span>
                  <span className="text-sm font-medium">Spotify</span>
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <span className="mr-2">🔗</span>
                  <span className="text-sm font-medium">SoundCloud</span>
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

  if (currentPage === 'signup') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <button
            onClick={() => navigate('home')}
            className="flex items-center text-purple-600 hover:text-purple-800 mb-8 group"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home
          </button>

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
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-purple-600 hover:text-purple-800 mb-8 group"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
            Back
          </button>

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

          <div className="rounded-xl overflow-hidden shadow-lg mb-10">
            <img 
              src={article.img} 
              alt={article.title}
              className="w-full h-[500px] object-cover"
            />
          </div>

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

  if (currentPage === 'amsterdam-page') {
    return <EventAmsterdam navigate={navigate} />;
  }

  if (currentPage === 'ibiza-page') {
    return <EventIbiza navigate={navigate} />;
  }

  if (currentPage === 'tenerife-page') {
    return <EventTenerife navigate={navigate} />;
  }

  if (currentPage === 'progressive-page') {
    return <Progressive navigate={navigate} />;
  }

  if (currentPage === 'future-page') {
    return <Future navigate={navigate} />;
  }

  if (currentPage === 'tomorrowland-post') {
    return <Tomorrowland navigate={navigate} />;
  }

  if (currentPage === 'ibiza-opening-post') {
    return <IbizaOpening navigate={navigate} />;
  }

  if (currentPage === 'edc-las-vegas-post') {
    return <EDCLasVegas navigate={navigate} />;
  }

  if (currentPage === 'bass-page') {
    return <Bass navigate={navigate} />;
  }

<<<<<<< HEAD
  if (currentPage === 'biographies') {
    return <BiographiesList navigate={navigate} />;
  }

  if (currentPage.includes('article')) {
    return renderArticleOrBio(currentPage);
  }

  if (currentPage.includes('-bio')) {
    return <Biography bioKey={currentPage} onNavigate={navigate} />;
  }

  if (currentPage.includes('checkout-')) {
    return <TicketsCheckout checkoutKey={currentPage} navigate={navigate} />;
  }

  if (currentPage.startsWith && currentPage.startsWith('tickets-')) {
    return <Tickets ticketKey={currentPage} navigate={navigate} />;
  }

  if (currentPage === 'travel-amsterdam') return <TravelAmsterdam navigate={navigate} />;
  if (currentPage === 'travel-ibiza') return <TravelIbiza navigate={navigate} />;
  if (currentPage === 'travel-tenerife') return <TravelTenerife navigate={navigate} />;

=======
  if (currentPage.includes('article') || currentPage.includes('-bio')) {
    return renderArticleOrBio(currentPage);
  }

>>>>>>> 14a745b47d1605977741684c88773018d0a304c4
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
