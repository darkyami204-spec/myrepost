import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function Progressive({ navigate }) {
  const genreContent = {
    title: 'Progressive House: The Evolution of Electronic Music',
    author: 'EchoWave Team • Dec 20, 2025',

    img: 'https://geo-media.beatsource.com/image_size/500x500/a/c/3/ac35d43e-19aa-4355-9693-2aba1ec8f513.jpg',

    summary: 'Discover the roots, evolution, and future of Progressive House, the genre that continues to shape modern electronic music.',
    content: [
      'Progressive House is more than just a genre—it\'s a philosophy of musical storytelling. Characterized by slow builds, layered elements, and extended track structures, Progressive House creates immersive journeys that can last 8-12 minutes or longer, taking listeners on an emotional and sonic expedition.',
      '## Origins and Foundations',
      'Progressive House emerged in the early 1990s in the UK and Europe as producers and DJs sought to create longer, more complex arrangements than the straightforward house music of the 1980s. Pioneers like The Orb, Leftfield, and The Chemical Brothers began experimenting with ambient textures, deeper basslines, and intricate production techniques.',
      'The genre takes inspiration from progressive rock\'s approach to composition—gradual evolution, instrumental complexity, and thematic development—but applies it to electronic music\'s rhythmic and sonic possibilities.',
      '## Key Characteristics',
      'Progressive House is defined by several core elements:',
      '- **Long track structures**: Most progressive tracks range from 8-15 minutes, allowing for extended musical development.',
      '- **Gradual builds**: Rather than sudden drops, progressive tracks introduce elements slowly, layer by layer.',
      '- **Deep basslines**: Rich, warm bass frequencies that evolve and change throughout the track.',
      '- **Atmospheric textures**: Ambient pads, strings, and ethereal synths create emotional depth.',
      '- **Percussion evolution**: Drums and rhythmic elements shift and transform as the track progresses.',
      '- **Melodic sophistication**: Complex chord progressions and memorable melodies guide the listener\'s journey.',
      '## The Golden Era (1990s-2000s)',
      'The 1990s and early 2000s marked the genre\'s explosion into mainstream consciousness. Artists like Sasha & John Digweed, Fatboy Slim, and Jamiroquai brought Progressive House to festival crowds worldwide. The genre dominated underground clubs and eventually broke through to mainstream radio and streaming platforms.',
      'This era saw the development of the "progressive journey," where a DJ or producer would craft an entire experience, taking the listener from introspective beginnings to euphoric peaks and back down again.',
      '## Modern Evolution',
      'Today, Progressive House remains vibrant and ever-evolving. Contemporary producers like Deadmau5, Disclosure, and Solarity blend progressive elements with pop sensibilities, creating tracks that appeal to both underground purists and mainstream audiences.',
      'Modern progressive tracks often incorporate elements from other genres:',
      '- Vocals from pop and R&B for commercial appeal',
      '- Techno elements for driving rhythms',
      '- Ambient and downtempo influences for introspective moments',
      '- Hip-hop and funk grooves for rhythm and swagger',
      '## Progressive House in Live Performance',
      'One of Progressive House\'s defining characteristics is its role in DJ culture. The long track structures and evolving arrangements make progressive tracks perfect for DJ sets, where mixing, blending, and layering create seamless experiences that can last for hours.',
      'Progressive festivals like Tomorrowland, Ultra, and Awakenings celebrate this genre\'s capacity to create unforgettable collective experiences, with massive crowds moving as one unified energy.',
      '## The Technical Mastery',
      'Producing progressive house requires deep technical knowledge and creative vision. Producers use sophisticated production techniques:',
      '- Detailed EQ and frequency management for clarity in complex arrangements',
      '- Advanced synthesis and sound design for unique textures',
      '- Careful automation of effects and parameters for organic evolution',
      '- Strategic use of reverb and spatial effects to create depth',
      '## Why Progressive House Endures',
      'Despite changing trends, Progressive House persists because it addresses a fundamental human need: the desire for emotional and sensory journey. In a world of short attention spans and bite-sized content, progressive music offers an escape—a chance to surrender to something greater than ourselves.',
      'Whether you\'re discovering the genre for the first time or you\'ve been following its evolution since the 1990s, Progressive House continues to prove that electronic music can be both intellectually complex and emotionally profound.',
      '## Notable Progressive House Artists',
      '- **Sasha**: British-American DJ and pioneer of the genre',
      '- **John Digweed**: Master of the 2-hour progressive journey',
      '- **Richie Hawtin (Plastikman)**: Innovator pushing genre boundaries',
      '- **Tiësto**: Brought progressive house to mainstream audiences',
      '- **Eric Prydz**: Modern progressive visionary with unmistakable sound design',
      '- **Adam Beyer**: Techno-meets-progressive pioneer',
      'The future of Progressive House is bright, with new producers constantly bringing fresh ideas while respecting the genre\'s roots.'
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
            <span className="font-medium text-purple-600">GENRE GUIDE</span>
            <span className="mx-2">•</span>
            <span>{genreContent.author.split('•')[1]?.trim()}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{genreContent.title}</h1>
          <div className="flex items-center text-gray-600">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                <span className="text-purple-600 font-bold">EW</span>
              </div>
              <div>
                <div className="font-medium">EchoWave</div>
                <div className="text-sm text-gray-500">{genreContent.author.split('•')[1]?.trim()}</div>
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
            src={genreContent.img} 
            alt={genreContent.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        <article className="prose prose-lg max-w-none mb-16">
          {genreContent.content.map((paragraph, index) => (
            <div key={index} className="mb-8">
              {paragraph.startsWith('## ') ? (
                <h3 className="text-2xl font-bold mt-12 mb-6 text-gray-800 border-l-4 border-purple-600 pl-4">
                  {paragraph.substring(3)}
                </h3>
              ) : paragraph.startsWith('- ') ? (
                <ul className="list-disc pl-6 text-gray-700 text-lg leading-relaxed">
                  <li>{paragraph.substring(2)}</li>
                </ul>
              ) : (
                <p className="text-gray-700 text-lg leading-relaxed">
                  {paragraph}
                </p>
              )}
            </div>
          ))}
        </article>

        <div className="border-t border-gray-200 pt-8 mb-16">
          <h4 className="font-bold text-lg mb-4">Share this guide</h4>
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
          <h4 className="font-bold text-2xl mb-8">Explore More Genres</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              onClick={() => navigate('future-page')}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition cursor-pointer"
            >
              <h5 className="font-bold text-lg mb-2 hover:text-purple-600">Future House</h5>
              <p className="text-gray-600 text-sm mb-4">Discover the high-energy sound that blends house and electro elements.</p>
              <div className="text-xs text-gray-500">Coming Soon</div>
            </div>
            <div 
              onClick={() => navigate('bass-page')}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition cursor-pointer"
            >
              <h5 className="font-bold text-lg mb-2 hover:text-purple-600">Bass House</h5>
              <p className="text-gray-600 text-sm mb-4">Explore the deep, heavy sounds that define modern underground electronic music.</p>
              <div className="text-xs text-gray-500">Coming Soon</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );

}

