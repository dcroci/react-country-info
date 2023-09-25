import { useState } from 'react';

export default function Filter({ onChangeFilter, isDarkMode }) {
  return (
    <select
      className={`text-white bg-gray-700 p-6 ${
        isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'
      }`}
      name="region"
      id="region"
      onChange={onChangeFilter}
    >
      <option value="filter">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}
