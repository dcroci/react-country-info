import { useState } from 'react';
import Filter from './Filter';

export default function Search({ onChangeFilter, onInputChange, searchValue }) {
  return (
    <div>
      <div className="flex justify-between w-11/12 mx-auto py-8">
        <input
          className="text-white bg-gray-700 p-4 w-3/6"
          type="text"
          placeholder="Search for a country..."
          value={searchValue}
          onChange={onInputChange}
        />
        <Filter onChangeFilter={onChangeFilter} />
      </div>
    </div>
  );
}
