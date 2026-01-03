import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const EVENTS = [
  {
    key: 'tickets-amsterdam',
    title: 'Amsterdam Dance Event 2025',
    date: 'Oct 15-19, 2025',
    location: 'Amsterdam, Netherlands',
    description: 'A multi-venue celebration of electronic music with daytime showcases, late-night sets and immersive art installations.'
  },
  {
    key: 'tickets-ibiza',
    title: 'Ibiza Opening Parties 2025',
    date: 'May 2-4, 2025',
    location: 'Ibiza, Spain',
    description: 'Season openers across the island — club nights, beach experiences and special guest performances.'
  },
  {
    key: 'tickets-tenerife',
    title: 'Tenerife EDM Festival 2025',
    date: 'Dec 27-30, 2025',
    location: 'Playa de las Américas • Tenerife, Spain',
    description: 'A beachside festival with daytime programming, art activations and curated stages.'
  }
];

const FEATURES = [
  'Hydration stations & non-alcoholic bars',
  'Food stalls with diverse cuisine',
  'Chillout & relaxation lounges',
  'Silent disco zones',
  'Workshops & artist-led sessions',
  'Merch & pop-up boutiques',
  'Photo booths & insta-spots',
  'Lockers & secure storage',
  'Accessibility & quiet areas',
  'Shuttle & local travel guidance'
];

export default function TicketsLanding() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Tickets & Experiences</h1>
          <button onClick={() => navigate('/')} className="text-purple-600">← Back to Home</button>
        </div>

        <p className="text-gray-700 mb-8">Choose an event below to view ticket options, maps and a list of on-site features (non-alcoholic focused).</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {EVENTS.map((e) => (
            <div key={e.key} className="bg-white rounded-xl shadow p-5 flex flex-col">
              <div className="h-40 w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 mb-4 flex items-end justify-start p-4 text-white">
                <div>
                  <div className="text-sm">{e.date}</div>
                  <h3 className="text-xl font-bold">{e.title}</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-4 flex-1">{e.description}</p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">{e.location}</div>
                <div className="space-x-2">
                  <button onClick={() => navigate(`/tickets/${e.key}`)} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">View Tickets</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">What to expect (non-alcoholic experiences)</h2>
          <p className="text-gray-700 mb-4">We focus on great music and memorable experiences. Below are some of the extra offerings commonly available at our events — all alcohol-free options are highlighted in the list.</p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="text-purple-600">•</span>
                <span className="text-gray-700">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <p className="text-sm text-gray-600">Want something added? We can include kid-friendly zones, wellness sessions, family areas and more — just tell us what you need.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
