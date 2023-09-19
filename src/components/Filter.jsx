import { useState } from 'react';

export default function Filter({ onChangeFilter }) {
  return (
    <select name="region" id="region" onChange={onChangeFilter}>
      <option value="filter">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}
