import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function IbizaOpening({ navigate }) {
  const post = {
    title: 'Ibiza Opening Parties 2025',
    author: 'EchoWave Team • Dec 10, 2025',
    img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&h=600&fit=crop&q=80',
    summary: 'Ibiza clubs kick off the summer season with headline opening parties and unforgettable nights.',
    content: [
      "Ibiza opening parties mark the official start of the summer season on the White Isle. Clubs like Pacha, Amnesia, Ushuaïa, and Hï Ibiza host massive opening nights featuring the world\'s top DJs.",
      'These opening weekends are a celebration of electronic music culture, bringing together fans, DJs, and promoters to set the tone for the season ahead.',
      '## Lineups and Parties',
      'From intimate label nights to stadium-scale events, the opening parties showcase a diverse mix of genres and artists. Promoters curate unforgettable lineups that often include back-to-back sets and exclusive backroom b2b performances.',
      '## What to Expect',
      '- Packed dancefloors and legendary afterparties',
      '- Pool parties during the day and club nights after midnight',
      '- International crowd and celebrity appearances',
      '- Exclusive VIP experiences and artist meetups',
      '## Practical Tips',
      '- Book tickets early — opening parties sell out fast',
      '- Consider package deals for accommodation and transfers',
      '- Arrive prepared for long nights and dynamic weather by the sea',
      '## The Island Vibe',
      'Ibiza has a unique energy — equal parts hedonistic and spiritual. The opening parties capture that feeling, making them essential dates for fans of dance music worldwide.'
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
            <span className="font-medium text-blue-600">FESTIVAL NEWS</span>
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
                <h3 className="text-2xl font-bold mt-12 mb-6 text-gray-800 border-l-4 border-blue-600 pl-4">{p.substring(3)}</h3>
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
