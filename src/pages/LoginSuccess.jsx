import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';

function Footer() {
  return (
    <footer className="border-t border-gray-200 px-8 py-6 text-center text-sm text-gray-600">
      <p>© 2025 EchoWave. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Twitter</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Facebook</a>
      </div>
    </footer>
  );
}

function LoginSuccess() {
  return (
    <div className="bg-white text-black font-sans min-h-screen">
      <Header />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-8">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Success Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            You logged in successfully!
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Welcome back to EchoWave. Enjoy exploring the latest in electronic music.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition duration-300"
            >
              Explore Home
            </Link>

            <Link
              to="/articles"
              className="inline-flex items-center justify-center px-8 py-3 border border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition duration-300"
            >
              Read Articles
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LoginSuccess;