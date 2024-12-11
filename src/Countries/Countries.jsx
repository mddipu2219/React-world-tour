import { useEffect, useState } from "react";
import Country from "./Country/Country";
import "./Countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCounries, setVisitedCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleVisitedCountry = (country) => {
    console.log(country);
    const newVisitedCountry = [...visitedCounries, country];
    setVisitedCountry(newVisitedCountry);
  };
  return (
    <div>
      <div>
        <h3>Visted Country:{visitedCounries.length}</h3>
        <ul>
          {visitedCounries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
}
