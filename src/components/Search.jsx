/* eslint-disable react/prop-types */
import Filter from './Filter';

export default function Search({
  onChangeFilter,
  onInputChange,
  searchValue,
  isDarkMode,
}) {
  return (
    <div>
      <div className="flex justify-between w-11/12 mx-auto py-8">
        <input
          className={` ${
            isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'
          } p-4 w-3/6`}
          type="text"
          placeholder="Search for a country..."
          value={searchValue}
          onChange={onInputChange}
        />
        <Filter onChangeFilter={onChangeFilter} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
