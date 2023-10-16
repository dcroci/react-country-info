/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

export default function CountryList({
  filterBy,
  countries,
  isDarkMode,
  visibleCountries,
  searchValue,
}) {
  const [countryElements, setCountryElements] = useState([]);
  useEffect(() => {
    const filteredCountries = countries.filter((country) => {
      if (filterBy === 'africa') {
        return country.region === 'Africa';
      } else if (filterBy === 'asia') {
        return country.region === 'Asia';
      } else if (filterBy === 'europe') {
        return country.region === 'Europe';
      } else if (filterBy === 'oceania') {
        return country.region === 'Oceania';
      } else if (filterBy === 'americas') {
        return country.region === 'Americas';
      } else {
        return true;
      }
    });

    const filteredBySearch = searchValue
      ? filteredCountries.filter((country) =>
          country.name.common.toLowerCase().includes(searchValue.toLowerCase())
        )
      : visibleCountries;

    const countryElements = filteredBySearch.map((country) => (
      <div
        key={country.name.common}
        className={`${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
        } flex flex-col justify-between hover:scale-105`}
      >
        <img src={country.flags.png} alt="" className="w-full h-52" />
        <h3 className="px-4 py-4 text-xl">
          <span className="font-bold">{country.name.common}</span>
        </h3>
        <p className="px-4 p-2">
          <span className="font-bold">Population:</span> {country.population}
        </p>
        <p className="px-4 pb-2">
          <span className="font-bold">Region:</span> {country.region}
        </p>
        <p className="px-4 pb-2">
          <span className="font-bold">Capital: </span>
          {country.capital}
        </p>
      </div>
    ));

    setCountryElements(countryElements);
  }, [countries, filterBy, isDarkMode, searchValue, visibleCountries]);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-11/12 mx-auto pb-8">
      {countryElements.length > 0 ? (
        countryElements
      ) : (
        <p
          className={`col-start-1 col-end-5 mx-auto ${
            isDarkMode ? ' text-white' : ' text-black'
          }`}
        >
          No results found for "{searchValue}"
        </p>
      )}
    </div>
  );
}
