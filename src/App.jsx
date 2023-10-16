import { useEffect, useState } from 'react';
import axios from 'axios';
import CountryList from './components/CountryList';
import Navbar from './components/Navbar';
import Search from './components/Search';
import MoreResultsButton from './components/MoreResultsButton';
import Footer from './components/Footer';

export default function App() {
  const [filterBy, setFilterBy] = useState('filter');
  const [searchValue, setSearchValue] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [countries, setCountries] = useState([]);
  const [searchResultCount, setSearchResultCount] = useState(50);
  const [searchResultCountries, setSearchResultCountries] = useState([]);
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountries(response.data);
        setSearchResultCountries(response.data.slice(0, searchResultCount));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [searchResultCount]);

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
        visibleCountries={searchResultCountries}
      />
      <MoreResultsButton
        count={searchResultCount}
        incrementCount={setSearchResultCount}
        isDarkMode={isDarkMode}
        filterBy={filterBy}
      />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
