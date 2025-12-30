import React from 'react';

export default function ArticleHeader({ article }) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        {article.title}
      </h1>
      <p className="text-gray-500 text-sm mb-6">{article.author}</p>
      
      <div className="flex justify-center mb-8">
        <img 
          src={article.img}
          alt={article.title}
          className="max-w-full h-auto max-h-[500px] object-contain rounded-lg shadow-lg" 
        />
      </div>
    </div>
  );
}

// Article Header with Metadata
export function ArticleHeaderWithMeta({ article, category, readTime, views }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        {category && (
          <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        )}
        {readTime && (
          <span className="text-gray-500 text-sm">📖 {readTime} read</span>
        )}
        {views && (
          <span className="text-gray-500 text-sm">👁️ {views} views</span>
        )}
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        {article.title}
      </h1>
      
      <div className="flex items-center gap-4 mb-6">
        <span className="text-gray-600 font-medium">
          {article.author.split('•')[0]}
        </span>
        <span className="text-gray-400">•</span>
        <span className="text-gray-500 text-sm">
          {article.author.split('•')[1]}
        </span>
      </div>
      
      <div className="flex justify-center mb-8">
        <img 
          src={article.img}
          alt={article.title}
          className="max-w-full h-auto max-h-[500px] object-contain rounded-lg shadow-lg" 
        />
      </div>
    </div>
  );
}

// Compact Article Header (for shorter articles)
export function CompactArticleHeader({ article }) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold mb-3 text-gray-900">
        {article.title}
      </h1>
      <p className="text-gray-500 text-sm mb-4">{article.author}</p>
      
      <img 
        src={article.img}
        alt={article.title}
        className="w-full h-64 object-cover rounded-lg shadow-md mb-6" 
      />
    </div>
  );
}

// Article Header with Background Image
export function HeroArticleHeader({ article }) {
  return (
    <div className="relative mb-8 -mt-8">
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={article.img}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Featured Article
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              {article.title}
            </h1>
            <p className="text-gray-200 text-lg">{article.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Article Header with Tags
export function ArticleHeaderWithTags({ article, tags = [] }) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        {article.title}
      </h1>
      
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <span className="text-gray-600 font-medium">
          {article.author.split('•')[0]}
        </span>
        <span className="text-gray-400">•</span>
        <span className="text-gray-500 text-sm">
          {article.author.split('•')[1]}
        </span>
        {tags.length > 0 && (
          <>
            <span className="text-gray-400">•</span>
            <div className="flex gap-2">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="flex justify-center mb-8">
        <img 
          src={article.img}
          alt={article.title}
          className="max-w-full h-auto max-h-[500px] object-contain rounded-lg shadow-lg" 
        />
      </div>
    </div>
  );
}

// Article Header with Social Share
export function ArticleHeaderWithShare({ article, onShare }) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        {article.title}
      </h1>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="text-gray-600 font-medium">
            {article.author.split('•')[0]}
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-500 text-sm">
            {article.author.split('•')[1]}
          </span>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => onShare && onShare('twitter')}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            aria-label="Share on Twitter"
          >
            <span className="text-sm">🐦</span>
          </button>
          <button 
            onClick={() => onShare && onShare('facebook')}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            aria-label="Share on Facebook"
          >
            <span className="text-sm">📘</span>
          </button>
          <button 
            onClick={() => onShare && onShare('copy')}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            aria-label="Copy link"
          >
            <span className="text-sm">🔗</span>
          </button>
        </div>
      </div>
      
      <div className="flex justify-center mb-8">
        <img 
          src={article.img}
          alt={article.title}
          className="max-w-full h-auto max-h-[500px] object-contain rounded-lg shadow-lg" 
        />
      </div>
    </div>
  );
}