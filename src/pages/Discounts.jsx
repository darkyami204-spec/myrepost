import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function Discounts() {
  return (
    <div className="bg-white text-black font-sans min-h-screen">
      <Header />

      <main className="max-w-4xl mx-auto px-8 py-16">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Discounts
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              There are no discounts currently
            </p>

            <div className="space-y-4">
              <Link
                to="/"
                className="inline-block px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-200"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}