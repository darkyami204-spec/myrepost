import React from 'react';

function Article({ articleKey, onNavigate }) {
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