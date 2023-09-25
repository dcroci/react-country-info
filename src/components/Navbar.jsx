import { useState } from 'react';

export default function Navbar({ isDarkMode, onToggleDarkMode }) {
  return (
    <nav
      className={`${
        isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
      } py-8  border-gray-300 border-b`}
    >
      <div className="flex justify-between w-11/12 mx-auto">
        <h1
          className={`text-xl font-bold ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}
        >
          Where in the world?
        </h1>
        <h2 className="cursor-pointer" onClick={onToggleDarkMode}>
          {isDarkMode ? 'Dark Mode 🌙' : 'Light Mode ☀️'}
        </h2>
      </div>
    </nav>
  );
}
