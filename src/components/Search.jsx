import { useState } from 'react';
import Filter from './Filter';

export default function Search({ onChangeFilter }) {
  const [searchValue, setSearchValue] = useState('k');
  function handleOnChange(e) {
    setSearchValue(e.target.value);
  }
  return (
    <div>
      <div className="flex justify-between w-11/12 mx-auto">
        <input
          className="text-black"
          type="text"
          placeholder="Search for a country..."
          value={searchValue}
          onChange={handleOnChange}
        />
        <Filter onChangeFilter={onChangeFilter} />
      </div>
    </div>
  );
}
