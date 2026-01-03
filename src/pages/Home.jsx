// In src/pages/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import articles from '../data/articlesData';
import latestPosts from '../data/latestPosts';

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

export default function Home() {
  const [genreOpen, setGenreOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);

  // Function to get the correct route for latest posts
  const getPostRoute = (slug) => {
    const routeMap = {
      'tomorrowland-post': '/tomorrowland',
      'ibiza-opening-post': '/ibiza-opening',
      'edc-las-vegas-post': '/edc-las-vegas'
    };
    return routeMap[slug] || `/article/${slug}`;
  };
  const [exclusivesOpen, setExclusivesOpen] = useState(false);

  return (
    <div className="bg-white text-black font-sans">
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide text-purple-600">EchoWave</h1>

          <div className="flex space-x-4 items-center">
            <Link
              to="/"
              className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
            >
              Home
            </Link>

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
                  <Link to="/progressive" className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full">Progressive</Link>
                  <Link to="/future" className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full">Future</Link>
                  <Link to="/bass" className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full">Bass</Link>
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
                  <Link to="/amsterdam" className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full">Amsterdam</Link>
                  <Link to="/tenerife" className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full">Tenerife</Link>
                  <Link to="/ibiza" className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full">Ibiza</Link>
                </div>
              )}
            </div>

            <Link
              to="/tickets"
              className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
            >
              Tickets
            </Link>

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
                  <Link to="/biographies" className="block px-4 py-2 text-sm hover:bg-gray-100 text-left w-full">Biography</Link>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Discounts</a>
                </div>
              )}
            </div>

            <Link
              to="/login"
              className="ml-6 px-4 py-2 rounded-lg text-sm font-semibold bg-purple-600 text-white hover:bg-purple-700 transition"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-purple-600 text-white hover:bg-purple-700 transition"
            >
              Sign Up
            </Link>
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
        <button 
          onClick={() => document.getElementById('latest-posts').scrollIntoView({ behavior: 'smooth' })}
          className="bg-purple-600 hover:bg-purple-700 transition px-8 py-3 rounded-full font-semibold text-white"
        >
          Explore Posts
        </button>
      </section>

      <section className="px-8 py-16" id="latest-posts">
        <h3 className="text-3xl font-bold mb-10 text-center">Latest Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {latestPosts.map((post) => (
            <Link key={post.id} to={getPostRoute(post.slug)} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
              <img src={post.image} className="w-full h-48 object-cover" alt={post.title} />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2">{post.title}</h4>
                <p className="text-gray-600 text-sm">{post.description}</p>
              </div>
            </Link>
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
                  <Link
                    to={`/article/${key}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
                  >
                    Read More
                  </Link>
                </div>
              </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}