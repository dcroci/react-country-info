import { useEffect, useState } from 'react';
import axios from 'axios';
import CountryList from './components/CountryList';
import Navbar from './components/Navbar';
import Search from './components/Search';

export default function App() {
  const [filterBy, setFilterBy] = useState('filter');
  const [searchValue, setSearchValue] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showHomePage, setShowHomePage] = useState(true);
  const [showSpecificCountry, setShowSpecificCountry] = useState(false);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  function togglePages() {
    setShowHomePage((prevState) => !prevState);
    setShowSpecificCountry((prevState) => !prevState);
  }
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
  if (showHomePage) {
    return (
      <div className={`text-white ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <Navbar isDarkMode={isDarkMode} onToggleDarkMode={handleDarkMode} />
        <Search
          onChangeFilter={handleChangeFilter}
          onInputChange={handleOnChange}
          searchValue={searchValue}
        />
        <CountryList
          filterBy={filterBy}
          searchValue={searchValue}
          isDarkMode={isDarkMode}
          togglePages={togglePages}
          countries={countries}
        />
      </div>
    );
  } else if (showSpecificCountry) {
    return (
      <div className={`text-white ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <Navbar isDarkMode={isDarkMode} onToggleDarkMode={handleDarkMode} />
        <p onClick={togglePages}>Go back</p>
      </div>
    );
  }
}
