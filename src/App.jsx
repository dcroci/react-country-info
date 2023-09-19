import { useState } from 'react';
import CountryList from './components/CountryList';
import Navbar from './components/Navbar';
import Search from './components/Search';

export default function App() {
  const [filterBy, setFilterBy] = useState('filter');
  function handleChangeFilter(e) {
    setFilterBy(e.target.value);
  }
  console.log(filterBy);
  return (
    <div className="text-white bg-gray-800">
      <Navbar />
      <Search onChangeFilter={handleChangeFilter} />
      <CountryList filterBy={filterBy} />
    </div>
  );
}
