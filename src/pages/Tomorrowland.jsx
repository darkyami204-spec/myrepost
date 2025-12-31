import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function Tomorrowland({ navigate }) {
  const postContent = {
    title: 'Tomorrowland 2025 Announced: The Biggest EDM Festival Returns with New Stages',
    author: 'EchoWave Team • Dec 15, 2025',
    img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&h=600&fit=crop&q=80',
    summary: 'The biggest EDM festival returns with new stages, expanded capacity, and an even more immersive experience.',
    content: [
      'After months of anticipation, Tomorrowland has officially announced its 2025 edition, and the news is bigger than ever. With expanded grounds, new stages, and a record-breaking lineup, Tomorrowland 2025 promises to be the most spectacular edition yet.',
      '## What\'s New for 2025',
      'The 2025 edition brings several groundbreaking additions to the legendary Boom festival grounds in Belgium:',
      '- **Three new mega-stages**: Featuring cutting-edge LED technology and immersive visual experiences',
      '- **Expanded camping areas**: More accommodations to welcome the growing global audience',
      '- **New art installations**: Interactive zones and larger-than-life sculptures throughout the grounds',
      '- **Enhanced sustainability initiatives**: Carbon-neutral operations and eco-friendly infrastructure',
      '- **Revolutionary stage design**: The main stage features a 360-degree visual experience',
      '## The Lineup',
      'Tomorrowland 2025 has assembled the most diverse and exciting lineup in the festival\'s history. From established legends to breakthrough artists, the festival celebrates every corner of electronic music:',
      'Headliners include Martin Garrix, Carl Cox, and Amelie Lens, with over 500 artists performing across multiple stages throughout the weekend. The lineup spans progressive house, techno, trance, drum and bass, and everything in between.',
      '## The Experience',
      'Tomorrowland has always been about creating a magical escape from reality, and 2025 takes this philosophy to new heights. With new immersive zones, enhanced production values, and a commitment to artistic excellence, attendees can expect a transformative experience.',
      'The festival\'s theme celebrates the intersection of nature and technology, with performances designed to showcase how electronic music can harmonize with environmental consciousness.',
      '## Dates and Logistics',
      'Tomorrowland 2025 takes place July 19-21 and July 26-28, 2025, with two separate weekend experiences. Early bird tickets sold out within hours of announcement, but additional tickets will be released throughout the winter.',
      'The festival continues to offer diverse accommodation packages, from luxury glamping to traditional camping, ensuring visitors can choose their comfort level.',
      '## Global Impact',
      'Tomorrowland has grown to become the world\'s largest electronic dance music festival, attracting visitors from nearly every country. The 2025 edition promises to expand this reach even further, with an estimated 400,000+ attendees from around the globe.',
      'The festival\'s economic impact on the Belgian region is substantial, with local businesses and tourism benefiting immensely from the annual event.',
      '## Sustainability Focus',
      'In response to growing environmental concerns, Tomorrowland 2025 commits to being completely carbon-neutral. Initiatives include:',
      '- **Renewable energy**: The entire festival runs on solar and wind power',
      '- **Zero-waste goal**: Comprehensive recycling and composting programs',
      '- **Sustainable materials**: All structures and decorations use eco-friendly materials',
      '- **Local sourcing**: Food and supplies sourced from regional suppliers',
      '- **Ocean cleanup**: Portion of proceeds go to ocean conservation efforts',
      '## The Cultural Moment',
      'Tomorrowland represents more than just music—it\'s a global gathering of electronic music culture, art, spirituality, and community. The festival has become a pilgrimage site for millions who believe in the transformative power of music and human connection.',
      'In a world often divided by borders and differences, Tomorrowland creates a space where 400,000 people from different backgrounds, cultures, and languages unite through the universal language of electronic music.',
      '## Artist Insights',
      'Leading up to the announcement, several iconic artists shared their excitement:',
      '"Tomorrowland is where dreams come alive. It\'s an honor to be part of this magical gathering." - Martin Garrix',
      '"Every year, Tomorrowland pushes boundaries and sets new standards for festivals. 2025 will be unforgettable." - Amelie Lens',
      '"After three decades of electronic music, Tomorrowland reminds me why I fell in love with this culture." - Carl Cox',
      '## Ticket Information',
      'Two rounds of tickets are already sold out, with a third round planned for winter 2025. Festival enthusiasts are encouraged to register early for the best selection and prices.',
      'The festival also offers loyalty programs and group discounts for returning attendees and large groups.',
      '## The Future of Festival Culture',
      'As music festivals face unprecedented challenges, Tomorrowland 2025 stands as a testament to the enduring appeal of live electronic music experiences. The festival\'s continued growth and innovation suggest a bright future for festival culture in an increasingly digital world.',
      'Whether it\'s your first time or your tenth, Tomorrowland 2025 promises to be an unforgettable experience that celebrates the power of music, community, and human connection on a global scale.'
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
            <span>{postContent.author.split('•')[1]?.trim()}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{postContent.title}</h1>
          <div className="flex items-center text-gray-600">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                <span className="text-purple-600 font-bold">EW</span>
              </div>
              <div>
                <div className="font-medium">EchoWave</div>
                <div className="text-sm text-gray-500">{postContent.author.split('•')[1]?.trim()}</div>
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
            src={postContent.img} 
            alt={postContent.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        <article className="prose prose-lg max-w-none mb-16">
          {postContent.content.map((paragraph, index) => (
            <div key={index} className="mb-8">
              {paragraph.startsWith('## ') ? (
                <h3 className="text-2xl font-bold mt-12 mb-6 text-gray-800 border-l-4 border-purple-600 pl-4">
                  {paragraph.substring(3)}
                </h3>
              ) : paragraph.startsWith('- ') ? (
                <ul className="list-disc pl-6 text-gray-700 text-lg leading-relaxed">
                  <li>{paragraph.substring(2)}</li>
                </ul>
              ) : paragraph.includes('"') && paragraph.endsWith('"') ? (
                <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-700 text-lg my-6">
                  {paragraph}
                </blockquote>
              ) : (
                <p className="text-gray-700 text-lg leading-relaxed">
                  {paragraph}
                </p>
              )}
            </div>
          ))}
        </article>

        <div className="border-t border-gray-200 pt-8 mb-16">
          <h4 className="font-bold text-lg mb-4">Share this post</h4>
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
          <h4 className="font-bold text-2xl mb-8">More Festival News</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              onClick={() => navigate('ibiza-page')}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition cursor-pointer"
            >
              <h5 className="font-bold text-lg mb-2 hover:text-purple-600">Ibiza Opening Parties 2025</h5>
              <p className="text-gray-600 text-sm mb-4">Discover the legendary summer season opening on the White Isle.</p>
              <div className="text-xs text-gray-500">Read More</div>
            </div>
            <div 
              onClick={() => navigate('amsterdam-page')}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition cursor-pointer"
            >
              <h5 className="font-bold text-lg mb-2 hover:text-purple-600">Amsterdam Dance Event 2025</h5>
              <p className="text-gray-600 text-sm mb-4">The world\'s leading electronic music festival and conference awaits.</p>
              <div className="text-xs text-gray-500">Read More</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
