import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function Future({ navigate }) {
  const genreContent = {
    title: 'Future House: The Sound of Modern Dance Music',
    author: 'EchoWave Team • Dec 21, 2025',

    img: 'https://www.resonance-sound.com/wp-content/uploads/2023/10/rs-future-edm-generations-vol.3-1000x1000__72dpi-768x768.jpg',

    summary: 'Explore Future House, the genre that fuses house music with electro elements, creating an irresistible sound for dance floors worldwide.',
    content: [
      'Future House is a modern evolution of dance music that emerged in the early 2010s, capturing the energy of house music while incorporating elements of electro, funk, and pop. Characterized by catchy hooks, driving basslines, and high-energy drops, Future House dominates festival stages and club dance floors around the world.',
      '## The Rise of Future House',
      'Future House gained mainstream prominence around 2014-2015, with pioneering artists like Disclosure, Route 94, and MK bringing the genre to international attention. The genre combines the infectious grooves of house music with the bright, punchy synths and vocal hooks reminiscent of electro and pop music.',
      'Unlike its more introspective cousin Progressive House, Future House is all about immediate impact, infectious melodies, and the kind of energy that makes crowds move without thinking.',
      '## Defining Characteristics',
      'Future House is instantly recognizable by these key elements:',
      '- **Energetic tempos**: Typically 120-130 BPM, designed for maximum dance floor impact',
      '- **Punchy basslines**: Deep but driving bass that propels the track forward',
      '- **Catchy melodies**: Memorable hooks and vocal samples that stick in your head',
      '- **Bright synths**: Crisp, clean synthesizer sounds and high-frequency elements',
      '- **Vocal features**: Often incorporates pop vocals and rap elements for broad appeal',
      '- **Build and drop structure**: Clear buildups leading to powerful drop moments',
      '- **Infectious grooves**: Funk-influenced rhythmic patterns that make you want to move',
      '## Pioneers and Icons',
      'Several artists have been instrumental in defining and popularizing Future House:',
      '- **Disclosure**: The British electronic duo who brought the genre into the mainstream',
      '- **Calvin Harris**: Blended Future House with pop sensibilities for massive hits',
      '- **Tchami**: Master of the deep, soulful future house sound',
      '- **Wax Motif**: Known for creating infectious, funk-laden future house tracks',
      '- **The Chainsmokers**: Merged future house with pop and EDM for global success',
      '## The Evolution',
      'Future House has continuously evolved since its inception. Early versions were darker and more underground, but as the genre exploded in popularity, it became brighter, more vocal-driven, and more accessible to mainstream audiences.',
      'Today, Future House encompasses a wide range of subgenres and styles:',
      '- **Deep Future House**: Incorporates deeper house elements with moody atmospheres',
      '- **Funk Future House**: Heavy on groove and funkified drums',
      '- **Pop Future House**: Leans heavily into vocal hooks and pop sensibilities',
      '- **Tech Future House**: Blends with techno for a more industrial sound',
      '## Why Future House Dominates',
      'Future House\'s dominance on contemporary dance floors comes from its perfect balance of accessibility and energy. It\'s sophisticated enough to appeal to music enthusiasts but immediate enough to get anyone dancing. The genre doesn\'t require a lengthy buildup—it grabs your attention immediately.',
      'The incorporation of recognizable vocal melodies and pop-influenced production means Future House tracks often cross over to mainstream radio, bringing the genre to audiences who might never step foot in a club.',
      '## Production Techniques',
      'Producing Future House requires a specific set of production skills:',
      '- **Pitch automation**: Synths and bass shift in pitch for dynamic movement',
      '- **Vocal chopping**: Vocal samples are chopped, pitched, and layered for texture',
      '- **Sidechain compression**: Creates that signature pumping, rhythmic quality',
      '- **Filter sweeps**: Filters open and close on synths for dynamic effect',
      '- **Layered percussion**: Multiple drum layers create complexity and groove',
      '## Future House in Modern Culture',
      'Future House has transcended club music to become a staple of pop culture. From festival main stages to mainstream radio, from commercials to video game soundtracks, Future House elements are everywhere.',
      'The genre\'s accessibility has made it the soundtrack to a generation, representing the fusion of underground electronic music with mainstream pop sensibilities.',
      '## The Global Impact',
      'Future House has a truly global reach, with influential producers and DJs from every continent contributing to the genre\'s evolution. It\'s the common language of dance floors worldwide, uniting millions of listeners through infectious melodies and irresistible grooves.',
      '## What\'s Next for Future House',
      'As music continues to evolve, Future House shows no signs of slowing down. Producers continue to innovate, blending the genre with new influences and technologies. Whether it\'s incorporating AI-generated vocals, collaborating with pop artists, or exploring new production techniques, Future House remains at the forefront of dance music innovation.'
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
              onClick={() => navigate('progressive-page')}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition cursor-pointer"
            >
              <h5 className="font-bold text-lg mb-2 hover:text-purple-600">Progressive House</h5>
              <p className="text-gray-600 text-sm mb-4">Discover the art of musical storytelling and gradual builds.</p>
              <div className="text-xs text-gray-500">Read More</div>
            </div>
            <div 
              onClick={() => navigate('bass-page')}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition cursor-pointer"
            >
              <h5 className="font-bold text-lg mb-2 hover:text-purple-600">Bass House</h5>
              <p className="text-gray-600 text-sm mb-4">Explore the deep, heavy sounds that define modern underground electronic music.</p>
              <div className="text-xs text-gray-500">Read More</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );

}
