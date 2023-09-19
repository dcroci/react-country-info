import CountryList from './components/CountryList';
import Navbar from './components/Navbar';
import Search from './components/Search';

export default function App() {
  return (
    <div className="text-white bg-gray-800">
      <Navbar />
      <Search />
      <CountryList />
    </div>
  );
}
