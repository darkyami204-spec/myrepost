import React from 'react';

function Articles({ navigate }) {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest Articles</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Stay updated with the latest news, announcements, and insights from the world of electronic music.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {Object.entries(articles).map(([key, article]) => (
            <div 
              key={key} 
              onClick={() => navigate(key)}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden cursor-pointer active:scale-[0.99]"
            >
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
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Articles;