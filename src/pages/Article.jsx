import React from 'react';
import articles from '../data/articlesData';

function Article({ articleKey, onNavigate }) {
  const article = articles[articleKey];

  if (!article) {
    return (
      <div className="min-h-screen bg-white text-black font-sans">
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-wide text-purple-600">EchoWave</h1>
            <button
              onClick={() => onNavigate('home')}
              className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
            >
              Back to Home
            </button>
          </div>
        </nav>
        <div className="max-w-4xl mx-auto px-8 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <button
            onClick={() => onNavigate('home')}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <h1 
            className="text-2xl font-bold tracking-wide text-purple-600 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            EchoWave
          </h1>
          <button
            onClick={() => onNavigate('home')}
            className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
          >
            ← Back to Home
          </button>
        </div>
      </nav>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-8 py-12">
        {/* Featured Image */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img 
            src={article.img} 
            alt={article.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center text-gray-600 text-sm">
            <span className="font-semibold text-purple-600">{article.author}</span>
          </div>
        </header>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          {article.content.map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                <span>👍</span>
                <span className="font-medium">Like</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                <span>💬</span>
                <span className="font-medium">Comment</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                <span>🔗</span>
                <span className="font-medium">Share</span>
              </button>
            </div>
          </div>
        </footer>

        {/* Related Articles */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">More Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(articles)
              .filter(([key]) => key !== articleKey)
              .slice(0, 2)
              .map(([key, relatedArticle]) => (
                <div 
                  key={key}
                  onClick={() => onNavigate(key)}
                  className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition cursor-pointer"
                >
                  <img 
                    src={relatedArticle.img} 
                    alt={relatedArticle.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-lg mb-2">{relatedArticle.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{relatedArticle.summary}</p>
                    <span className="text-purple-600 text-sm font-semibold">Read More →</span>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-8 py-6 text-center text-sm text-gray-600 mt-16">
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
    </div>
  );
}

export default Article;