import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function Bass({ navigate }) {
  const genreContent = {
    title: 'Bass House: The Underground Revolution',
    author: 'EchoWave Team • Dec 22, 2025',

    img: 'https://mixmagadria.com/assets/uploads/images/_fullX2/vecteezy_ai-generated-groovy-scene-view-from-the-back-as-the-dj-spins_36117097.jpg',

    summary: 'Discover Bass House, the underground genre that dominates modern electronic music with its heavy, wobbling basslines and hard-hitting drums.',
    content: [
      'Bass House is the underground counterpart to Future House, pushing electronic music into darker, heavier territory. Born from the fusion of house music, trap, and dubstep influences, Bass House is characterized by aggressive basslines, hard-hitting kicks, and a raw energy that appeals to the most dedicated electronic music enthusiasts.',
      '## The Origins of Bass House',
      'Bass House emerged in the mid-2010s as producers began experimenting with heavier, more aggressive sounds within the house music framework. Artists like Jauz, Tchami, and Wax Motif were among the first to bring bass-heavy house music into the mainstream underground scene.',
      'Unlike the accessible, pop-friendly Future House, Bass House drew from underground dance music traditions, honoring the raw energy of early house, techno, and drum and bass.',
      '## Key Sonic Characteristics',
      'Bass House is immediately identifiable by its signature sound:',
      '- **Aggressive basslines**: Deep, wobbling, and distorted bass that dominates the frequency spectrum',
      '- **Hard-hitting kicks**: Heavy, punchy drums that hit with serious impact',
      '- **Industrial textures**: Metallic, harsh, and aggressive sound design',
      '- **Minimal melodies**: Focus on rhythm and bass rather than harmonic complexity',
      '- **Dubstep and trap influences**: Borrows elements from heavier electronic genres',
      '- **High-energy delivery**: Fast-paced, no-nonsense approach to structure',
      '- **Underground aesthetic**: Raw production, distortion, and unpolished sounds are features, not bugs',
      '## Bass House Subgenres',
      'As Bass House evolved, several distinct subgenres emerged:',
      '- **Melodic Bass House**: Incorporates more melody while maintaining heavy bass',
      '- **Wonky Bass House**: Dissonant, abstract basslines with weird, offbeat grooves',
      '- **Tech Bass House**: Blends with minimal techno for industrial minimalism',
      '- **UK Bass House**: Roots in UK garage and grime influences',
      '## The Pioneers',
      'Several artists have been crucial in shaping Bass House:',
      '- **Jauz**: Early innovator known for aggressive, progressive bass drops',
      '- **Tchami**: Master of both deep and aggressive bass house sounds',
      '- **Wax Motif**: Created some of the most iconic bass house tracks',
      '- **AC Slater**: Built a thriving underground Bass House movement',
      '- **Walker & Royce**: Pioneers of a grittier, more experimental bass house sound',
      '## Why Bass House Matters',
      'In a landscape increasingly dominated by accessible, mainstream-friendly electronic music, Bass House represents a return to the underground ethos of dance music culture. It\'s music made for warehouse parties, underground clubs, and passionate fans who want something raw and uncompromising.',
      'Bass House reminds us that electronic music doesn\'t need to be friendly or immediately accessible—it can be challenging, abrasive, and beautiful in its rawness.',
      '## Production Philosophy',
      'Producing Bass House requires a different mindset than mainstream house music:',
      '- **Sound design first**: Creating unique, aggressive bass textures is paramount',
      '- **Distortion as a feature**: Saturation and overdrive are tools, not mistakes',
      '- **Percussive arrangements**: Complex, layered drum patterns create groove without melody',
      '- **Frequency balancing**: Managing extreme low and high frequencies for club systems',
      '- **Experimental approach**: Producers aren\'t afraid to break conventional rules',
      '## Bass House and Club Culture',
      'Bass House thrives in underground clubs and intimate venues where the sound system can handle the extreme low frequencies. The genre has developed a passionate global community of DJs and producers who prioritize artistic expression over commercial appeal.',
      'Venues like fabric (London), Berghain (Berlin), and countless others celebrate Bass House as a return to the raw, unpolished essence of club culture.',
      '## The Global Movement',
      'From Los Angeles to Berlin, from Tokyo to London, Bass House has cultivated a worldwide underground movement. Radio shows, online communities, and independent labels have emerged to support the genre and give voice to its most innovative producers.',
      'This global network has created a thriving ecosystem where underground artists can find support without needing mainstream radio play or streaming numbers.',
      '## The Future of Bass House',
      'As electronic music continues to diversify, Bass House represents an important counterbalance to over-produced, algorithm-friendly music. The genre\'s commitment to raw sound, underground values, and artistic expression ensures its continued relevance.',
      'Whether it\'s the next generation of producers pushing the sound even further or longtime fans discovering the genre for the first time, Bass House will continue to challenge, inspire, and energize the underground electronic music community.'
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
              onClick={() => navigate('future-page')}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition cursor-pointer"
            >
              <h5 className="font-bold text-lg mb-2 hover:text-purple-600">Future House</h5>
              <p className="text-gray-600 text-sm mb-4">Explore modern dance music with infectious melodies and high energy.</p>
              <div className="text-xs text-gray-500">Read More</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );

}

