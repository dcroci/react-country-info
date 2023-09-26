import { useEffect, useState } from 'react';
import axios from 'axios';
import CountryList from './components/CountryList';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Footer from './components/Footer';

export default function App() {
  const [filterBy, setFilterBy] = useState('filter');
  const [searchValue, setSearchValue] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
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

  function handleDarkMode() {
    setIsDarkMode((prevState) => !prevState);
  }
  function handleChangeFilter(e) {
    setFilterBy(e.target.value);
  }
  function handleOnChange(e) {
    setSearchValue(e.target.value);
  }
  return (
    <div
      className={`text-white  ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
    >
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={handleDarkMode} />
      <Search
        onChangeFilter={handleChangeFilter}
        onInputChange={handleOnChange}
        searchValue={searchValue}
        isDarkMode={isDarkMode}
      />
      <CountryList
        filterBy={filterBy}
        searchValue={searchValue}
        isDarkMode={isDarkMode}
        countries={countries}
      />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
