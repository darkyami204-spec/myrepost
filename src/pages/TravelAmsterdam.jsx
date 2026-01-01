import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function TravelAmsterdam({ navigate }) {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header navigate={navigate} />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <button onClick={() => navigate('amsterdam-page')} className="text-purple-600 mb-6">← Back to Amsterdam Event</button>
        <h1 className="text-3xl font-bold mb-4">Amsterdam — Travel Guide</h1>
        <p className="text-gray-700 mb-4">Amsterdam is an exceptionally well-connected European hub with an extensive public transport network. Visitors arriving by air typically use Schiphol Airport, which offers fast train connections to Amsterdam Central Station and frequent bus and shuttle services to major districts. The city's compact layout makes it ideal for walking or cycling — bike rental is widely available and often the fastest way to move between venues. For ADE, many events are clustered around the city centre and the RAI/Jaarbeurs zones; expect short tram or taxi rides between club locations and conference venues. Accommodations range from boutique canal-side hotels to larger conference hotels near the RAI. During festival periods, book early and consider using local shuttle services or organized transfers to avoid peak congestion.</p>
        <p className="text-gray-700">Local tips: purchase an OV-chipkaart for easy transit across trains, trams, and buses; learn basic cycling etiquette; keep an eye on event schedules as late-night transfers can be crowded. For budget travelers, look for stays a short tram ride away rather than in the tourist-heavy centre.</p>
      </main>

      <Footer />
    </div>
  );
}
