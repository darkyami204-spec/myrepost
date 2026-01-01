import React, { useState, useMemo } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { EVENTS } from './Tickets';

function parsePrice(priceStr) {
  if (!priceStr) return 0;
  const n = priceStr.replace(/[^0-9.]/g, '');
  const v = parseFloat(n);
  return Number.isFinite(v) ? v : 0;
}

export default function TicketsCheckout({ checkoutKey, navigate }) {
  const eventKey = typeof checkoutKey === 'string' ? checkoutKey.replace(/^checkout-/, '') : checkoutKey;
  const event = EVENTS[eventKey];

  const initialCounts = useMemo(() => {
    const obj = {};
    event.price.forEach((p) => { obj[p.tier] = 0; });
    return obj;
  }, [event]);

  const [counts, setCounts] = useState(initialCounts);

  const change = (tier, delta) => {
    setCounts((c) => {
      const next = { ...c };
      next[tier] = Math.max(0, (next[tier] || 0) + delta);
      return next;
    });
  };

  const totalTickets = Object.values(counts).reduce((s, v) => s + v, 0);
  const totalPrice = Object.entries(counts).reduce((sum, [tier, qty]) => {
    const p = event.price.find((x) => x.tier === tier);
    if (!p) return sum;
    const priceNum = parsePrice(p.price);
    return sum + priceNum * qty;
  }, 0);

  if (!event) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Checkout not found</h2>
          <button onClick={() => navigate('tickets')} className="px-6 py-2 bg-purple-600 text-white rounded-lg">Back to Tickets</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header navigate={navigate} />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <button onClick={() => navigate('tickets')} className="text-purple-600 mb-6">← Back to Tickets</button>

        <div className="bg-white rounded-xl shadow p-8">
          <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
          <div className="text-sm text-gray-500 mb-4">{event.date} • {event.location}</div>
          <p className="text-gray-700 mb-6">{event.description || 'Select ticket quantities below.'}</p>

          <div className="space-y-4">
            {event.price.map((p) => (
              <div key={p.tier} className="flex items-center justify-between border rounded p-4">
                <div>
                  <div className="font-semibold">{p.tier}</div>
                  <div className="text-xs text-gray-500">{p.price} each</div>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => change(p.tier, -1)} className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50" disabled={counts[p.tier] <= 0}>−</button>
                  <div className="w-10 text-center font-medium">{counts[p.tier]}</div>
                  <button onClick={() => change(p.tier, 1)} className="px-3 py-1 bg-gray-200 rounded">+</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">Total tickets</div>
              <div className="text-2xl font-bold">{totalTickets}</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Estimated total</div>
              <div className="text-2xl font-bold">{totalPrice > 0 ? `€${totalPrice.toFixed(2)}` : 'Contact for price'}</div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => alert(`Proceeding to purchase: ${totalTickets} tickets — total ${totalPrice > 0 ? `€${totalPrice.toFixed(2)}` : 'TBD'}`)}
              disabled={totalTickets === 0}
              className={`w-full py-3 rounded-lg text-white ${totalTickets === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'}`}
            >
              Proceed to Payment
            </button>
            <button onClick={() => { setCounts(initialCounts); }} className="w-full py-3 rounded-lg border border-gray-300">Reset</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
