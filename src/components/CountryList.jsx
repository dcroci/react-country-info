import axios from 'axios';
import { useEffect, useState } from 'react';

export default function CountryList() {
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
  console.log(countries);
  const countryElements = countries.map((country) => (
    <div
      key={country.name.common}
      className="flex flex-col justify-between bg-gray-600 m-3"
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

  return (
    <div className="grid grid-cols-4 gap-4 w-11/12 mx-auto">
      {countryElements}
    </div>
  );
}
