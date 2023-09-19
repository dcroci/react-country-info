import { useEffect, useState } from 'react';

export default function CountryList({
  filterBy,
  searchValue,
  togglePages,
  countries,
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

    const elements = filteredCountries.map((country) => (
      <div
        key={country.name.common}
        className={`flex flex-col justify-between bg-gray-700 cursor-pointer hover:scale-105`}
        onClick={togglePages}
      >
        <img src={country.flags.png} alt="" className="w-full h-48" />
        <h3 className="px-4 py-4 text-xl">
          <span className="font-bold">{country.name.common}</span>
        </h3>
        <p className="px-4 p-2">
          {' '}
          <span className="font-bold">Population:</span> {country.population}
        </p>
        <p className="px-4 pb-2">
          {' '}
          <span className="font-bold">Region:</span> {country.region}
        </p>
        <p className="px-4 pb-2">
          {' '}
          <span className="font-bold">Capital: </span>
          {country.capital}
        </p>
      </div>
    ));

    setCountryElements(elements);
  }, [countries, filterBy]);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto">
      {countryElements}
    </div>
  );
}
