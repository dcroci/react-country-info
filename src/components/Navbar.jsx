import { useState } from 'react';

export default function Navbar({ isDarkMode, onToggleDarkMode }) {
  return (
    <nav className="bg-gray-700 py-8">
      <div className="flex justify-between w-11/12 mx-auto">
        <h1 className="text-xl font-bold">Where in the world?</h1>
        <h2 className="cursor-pointer" onClick={onToggleDarkMode}>
          {isDarkMode ? 'Dark Mode 🌙' : 'Light Mode ☀️'}
        </h2>
      </div>
    </nav>
  );
}
