// In src/pages/Home.jsx
import React from 'react';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';
import { CompactArticleCard } from '../components/articles/ArticleCard';
import ArticleCard from '../components/articles/ArticleCard';
export default function Home({ navigate, articles }) {
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

  return (
    <div className="bg-white text-black font-sans">
      <Navigation navigate={navigate} />

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
            <CompactArticleCard
              key={post.id}
              post={post}
              onClick={() => navigate('article')}
            />
          ))}
        </div>
      </section>

      {/* RECENT ARTICLES */}
      <section className="px-8 py-16 bg-gray-50">
        <h3 className="text-3xl font-bold mb-10 text-center">Recent Articles</h3>
        <div className="space-y-8 max-w-4xl mx-auto">
          {Object.entries(articles)
            .filter(([key]) => !key.includes('-bio') && !key.includes('amsterdam-article'))
            .map(([key, article]) => (
              <ArticleCard
                key={key}
                article={article}
                articleKey={key}
                onClick={(articleKey) => navigate(articleKey)}
              />
            ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}