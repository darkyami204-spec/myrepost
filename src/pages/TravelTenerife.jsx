import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function TravelTenerife() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/tenerife-event" className="text-purple-600 mb-6">← Back to Tenerife Event</Link>
        <h1 className="text-3xl font-bold mb-4">Tenerife — Travel Guide</h1>
        <p className="text-gray-700 mb-4">Tenerife is part of the Canary Islands and offers unique travel logistics compared to mainland European festivals. Most visitors arrive via Tenerife South (TFS) or Tenerife North (TFN) airports; car rentals, taxis, and intercity buses connect Playa de las Américas with other parts of the island. For festival-goers, staying near Playa de las Américas minimizes transfers — many venues are within short taxi or shuttle distance. Expect warmer weather and outdoor-friendly scheduling; nighttime beach events often require simple sun-and-sand packing but plan for wind near coastal stages.</p>
        <p className="text-gray-700">Local tips: book transfers early in winter holiday windows, consider group shuttle rides for late-night returns, and check local bus timetables since rural routes run infrequently. If you plan to explore, include time for Mount Teide excursions and local cultural sites.</p>
      </main>

      <Footer />
    </div>
  );
}
