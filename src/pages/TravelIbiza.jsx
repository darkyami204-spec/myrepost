import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function TravelIbiza({ navigate }) {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header navigate={navigate} />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <button onClick={() => navigate('ibiza-page')} className="text-blue-600 mb-6">← Back to Ibiza Event</button>
        <h1 className="text-3xl font-bold mb-4">Ibiza — Travel Guide</h1>
        <p className="text-gray-700 mb-4">Ibiza's transport is island-focused: arrivals generally come through Ibiza Airport or ferry terminals. Once on the island, taxis and licensed shuttle services connect the main towns and club areas, though services can be limited late at night — many clubs organize official shuttles for opening weekends. Playa d'en Bossa and Ibiza Town are the primary hubs for Opening Parties, with short taxi rides between major venues. During peak season, expect heavy traffic and higher taxi fares; planning transfers in advance or using scheduled shuttles will save time. Renting a car can be useful for exploring, but parking near popular clubs is limited.</p>
        <p className="text-gray-700">Local tips: consider staying close to your primary venue to reduce late-night travel, book airport transfers in advance during opening weekends, and check club websites for shuttle options. If you prefer quieter evenings, choose accommodations slightly inland or near Sant Antoni.</p>
      </main>

      <Footer />
    </div>
  );
}
