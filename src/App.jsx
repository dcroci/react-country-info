import { useState } from 'react';
import CountryList from './components/CountryList';
import Navbar from './components/Navbar';
import Search from './components/Search';

export default function App() {
  const [filterBy, setFilterBy] = useState('filter');
  const [searchValue, setSearchValue] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  function handleDarkMode() {
    setIsDarkMode((prevState) => !prevState);
  }
  function handleChangeFilter(e) {
    setFilterBy(e.target.value);
  }
  function handleOnChange(e) {
    setSearchValue(e.target.value);
  }
  console.log(filterBy);
  return (
    <div className={`text-white ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={handleDarkMode} />
      <Search
        onChangeFilter={handleChangeFilter}
        onInputChange={handleOnChange}
        searchValue={searchValue}
      />
      <CountryList filterBy={filterBy} searchValue={searchValue} />
    </div>
  );
}
