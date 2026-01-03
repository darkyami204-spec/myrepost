import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const EVENTS = {
  'tickets-amsterdam': {
    title: 'Amsterdam Dance Event 2025',
    date: 'Oct 15-19, 2025',
    location: 'Multiple Venues • Amsterdam, Netherlands',
    price: [
      { tier: 'General Admission', price: '€75' },
      { tier: 'VIP', price: '€220' },
      { tier: 'Weekend Pass', price: '€350' }
    ],
    estimatedAttendees: '400,000+',
    buyUrl: 'https://www.ticketmaster.com/search?q=Amsterdam+Dance+Event'
  },
  'tickets-ibiza': {
    title: 'Ibiza Opening Parties 2025',
    date: 'May 2-4, 2025',
    location: 'Multiple Clubs • Ibiza, Spain',
    price: [
      { tier: 'Club Pass', price: '€45' },
      { tier: 'VIP Table', price: '€400+' },
      { tier: 'Season Pass', price: '€1200' }
    ],
    estimatedAttendees: '100,000+',
    buyUrl: 'https://www.ticketmaster.com/search?q=Ibiza+Opening+Parties'
  },
  'tickets-tenerife': {
    title: 'Tenerife EDM Festival 2025',
    date: 'Dec 27-30, 2025',
    location: 'Playa de las Américas • Tenerife, Spain',
    price: [
      { tier: 'Day Ticket', price: '€60' },
      { tier: 'VIP Beach', price: '€180' },
      { tier: 'Full Festival', price: '€240' }
    ],
    estimatedAttendees: '50,000+',
    buyUrl: 'https://www.ticketmaster.com/search?q=Tenerife+EDM+Festival'
  }
};

export default function Tickets() {
  const navigate = useNavigate();
  const { ticketId } = useParams();
  const ticketKey = ticketId;
  const event = EVENTS[ticketKey];

  if (!event) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Tickets not found</h2>
          <button onClick={() => navigate('/')} className="px-6 py-2 bg-purple-600 text-white rounded-lg">Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <button onClick={() => navigate('/')} className="text-purple-600 mb-6">← Back to Home</button>

        <div className="bg-white rounded-xl shadow p-8">
          <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
          <div className="text-sm text-gray-500 mb-4">{event.date} • {event.location}</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Ticket Options</h3>
              <ul className="space-y-2">
                {event.price.map((p) => (
                  <li key={p.tier} className="flex justify-between items-center border rounded p-3">
                    <div>
                      <div className="font-medium">{p.tier}</div>
                      <div className="text-xs text-gray-500">Estimated price</div>
                    </div>
                    <div className="font-semibold">{p.price}</div>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button
                  onClick={() => navigate(`/checkout/${ticketKey}`)}
                  className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700"
                >
                  Buy Official Tickets
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Event Summary</h3>
              <p className="text-gray-700 mb-4">Estimated attendance: <span className="font-semibold">{event.estimatedAttendees}</span></p>
              <h4 className="font-semibold mb-2">Venue</h4>
              <div className="rounded overflow-hidden border mb-4">
                <iframe title="event-map" src={`https://www.google.com/maps?q=${encodeURIComponent(event.location)}&output=embed`} className="w-full h-40" loading="lazy" />
              </div>
              <h4 className="font-semibold mb-2">Quick Travel Info</h4>
              <p className="text-gray-700">Events run across multiple nearby venues — expect short transfers between sites. Check local airports and transit for the best routes.</p>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-2">On-site experiences (non-alcoholic)</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Hydration stations & non-alcoholic drink bars</li>
                  <li>Food stalls with diverse cuisines</li>
                  <li>Chillout lounges and quiet spaces</li>
                  <li>Silent disco areas</li>
                  <li>Workshops and artist Q&amp;A sessions</li>
                  <li>Merch shops and pop-up boutiques</li>
                  <li>Photo booths and interactive art</li>
                  <li>Lockers and secure storage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export { EVENTS };
