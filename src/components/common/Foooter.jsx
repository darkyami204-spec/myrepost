import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 px-8 py-6 text-center text-sm text-gray-600">
      <p>© 2025 EchoWave. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-purple-600 transition"
        >
          Instagram
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-purple-600 transition"
        >
          Twitter
        </a>
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-purple-600 transition"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
}