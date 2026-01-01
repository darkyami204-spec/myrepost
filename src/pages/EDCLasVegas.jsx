import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function EDCLasVegas({ navigate }) {
  const post = {
    title: 'EDC Las Vegas Highlights: Iconic Moments from the Circuit Grounds',
    author: 'EchoWave Team • Dec 12, 2025',
    img: 'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?w=1200&h=600&fit=crop&q=80',
    summary: 'A look back at the most iconic moments from EDC Las Vegas, the celebration of electronic music, art, and culture.',
    content: [
      'EDC Las Vegas has become a pilgrimage for electronic music fans worldwide. From neon-lit nights to sunrise sets, EDC delivers unforgettable experiences that blend music, art, and community.',
      '## Standout Moments',
      '- Spectacular light shows and synchronized stage visuals',
      '- Memorable artist collaborations and surprise B2B sets',
      '- Immersive art cars and interactive installations',
      '- Sunrise sets that transform the atmosphere into something transcendent',
      '## Top Performances',
      'Over the years, EDC has hosted legendary sets across multiple stages. Some performances become instant classics, replayed in the minds of fans for years to come.',
      '## The Culture',
      'Part festival, part carnival, EDC fosters a unique culture built on creativity, acceptance, and spectacle. The community-driven ethos and the visual artistry make it one of the most talked-about events in electronic music.',
      '## Practical Info',
      '- Best time to go: spring when lineups are announced',
      '- Tickets: general admission and VIP options available',
      '- Stay safe: hydrate, rest between sets, and follow festival safety guidelines',
      'EDC continues to evolve, but its core remains the same: a celebration of sound, light, and human connection.'
    ]
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header navigate={navigate} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate('home')}
          className="flex items-center text-purple-600 hover:text-purple-800 mb-8 group"
        >
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
          Back
        </button>

        <header className="mb-10">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="font-medium text-purple-600">FESTIVAL NEWS</span>
            <span className="mx-2">•</span>
            <span>{post.author.split('•')[1]?.trim()}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
        </header>

        <div className="rounded-xl overflow-hidden shadow-lg mb-10">
          <img src={post.img} alt={post.title} className="w-full h-[400px] object-cover" />
        </div>

        <article className="prose prose-lg max-w-none mb-16">
          {post.content.map((p, i) => (
            <div key={i} className="mb-6">
              {p.startsWith('## ') ? (
                <h3 className="text-2xl font-bold mt-12 mb-6 text-gray-800 border-l-4 border-purple-600 pl-4">{p.substring(3)}</h3>
              ) : p.startsWith('- ') ? (
                <ul className="list-disc pl-6 text-gray-700 text-lg leading-relaxed"><li>{p.substring(2)}</li></ul>
              ) : (
                <p className="text-gray-700 text-lg leading-relaxed">{p}</p>
              )}
            </div>
          ))}
        </article>

        <Footer />
      </main>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 14a745b47d1605977741684c88773018d0a304c4
