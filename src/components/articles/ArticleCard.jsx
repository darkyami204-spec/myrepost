import React from 'react';

export default function ArticleCard({ article, articleKey, onClick }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
      <img 
        src={article.img} 
        className="w-full h-56 object-cover" 
        alt={article.title} 
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-2xl font-bold">{article.title}</h4>
          <span className="text-sm text-gray-500">
            {article.author.split('•')[1] || article.author}
          </span>
        </div>
        <p className="text-sm text-purple-600 font-semibold mb-3">
          📍 {article.author.split('•')[0]}
        </p>
        <p className="text-gray-600 mb-4">{article.summary}</p>
        <button
          onClick={() => onClick(articleKey)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          Read More
        </button>
      </div>
    </div>
  );
}

// Compact Article Card (for "Latest Posts" section)
export function CompactArticleCard({ post, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer active:scale-[0.98]"
    >
      <img 
        src={post.image} 
        className="w-full h-48 object-cover" 
        alt={post.title} 
      />
      <div className="p-4">
        <h4 className="font-bold text-lg mb-2">{post.title}</h4>
        <p className="text-gray-600 text-sm">{post.description}</p>
      </div>
    </div>
  );
}

// Featured Article Card (with large image)
export function FeaturedArticleCard({ article, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden cursor-pointer"
    >
      <div className="relative">
        <img 
          src={article.img} 
          className="w-full h-96 object-cover" 
          alt={article.title} 
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <span className="inline-block bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
            FEATURED
          </span>
          <h3 className="text-2xl font-bold text-white mb-2">{article.title}</h3>
          <p className="text-gray-200 text-sm">{article.author}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{article.summary}</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
          Read Article
        </button>
      </div>
    </div>
  );
}

// Horizontal Article Card (for sidebars or related articles)
export function HorizontalArticleCard({ article, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="flex gap-4 bg-white rounded-lg p-4 hover:shadow-md transition cursor-pointer"
    >
      <img 
        src={article.img}
        alt={article.title}
        className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
      />
      <div className="flex-1">
        <h4 className="font-semibold text-sm mb-1 line-clamp-2">{article.title}</h4>
        <p className="text-xs text-gray-500 mb-2">{article.author}</p>
        <span className="text-xs text-purple-600 font-semibold">Read more →</span>
      </div>
    </div>
  );
}

// Related Article Card (compact version for suggestions)
export function RelatedArticleCard({ article, category, readTime, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="p-4 bg-white rounded-lg hover:shadow-md transition cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <h4 className="font-medium text-gray-900">{article.title}</h4>
        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
          {category}
        </span>
      </div>
      <div className="flex items-center mt-2 text-sm text-gray-500">
        <span>📖 {readTime} read</span>
      </div>
    </div>
  );
}

// Article List Item (for article lists/archives)
export function ArticleListItem({ article, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="border-b border-gray-200 py-6 hover:bg-gray-50 transition cursor-pointer px-4 rounded-lg"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-gray-900 hover:text-purple-600 transition">
          {article.title}
        </h3>
        <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
          {article.author.split('•')[1] || article.date}
        </span>
      </div>
      <p className="text-gray-600 mb-3">{article.summary}</p>
      <div className="flex items-center gap-4 text-sm">
        <span className="text-purple-600 font-semibold">
          {article.author.split('•')[0]}
        </span>
        <span className="text-gray-400">•</span>
        <span className="text-gray-500">{article.readTime || '5 min read'}</span>
      </div>
    </div>
  );
}

// Article Grid Card (for grid layouts)
export function ArticleGridCard({ article, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer group"
    >
      <div className="relative overflow-hidden">
        <img 
          src={article.img} 
          className="w-full h-48 object-cover group-hover:scale-110 transition duration-300" 
          alt={article.title} 
        />
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-purple-600 text-xs font-semibold px-3 py-1 rounded-full">
            {article.category || 'Article'}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h4 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-purple-600 transition">
          {article.title}
        </h4>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.summary}</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{article.author.split('•')[0]}</span>
          <span>{article.readTime || '5 min read'}</span>
        </div>
      </div>
    </div>
  );
}