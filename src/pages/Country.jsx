import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";

export const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData();
            setCountries(res.data);
        });
    }, []);

    if (isPending) return <Loader />;

    const searchCountry = (country) => {
        return country.name.toLowerCase().includes(search.toLowerCase());
        //  country.capital?.toLowerCase().includes(search.toLowerCase())
    };

    const filteredCountries = countries.filter(searchCountry);

    return (
        <>
            <div className="heading">
                <h1>Explore The World</h1>
                <p>Discover countries, capitals, regions and much more.</p>
            </div>

            <div className="search-filter-container">

                <input
                    type="text"
                    placeholder="Search Country..."
                    className="search-input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select className="filter-select">
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>

            </div>

            <div className="country-container">
                {filteredCountries.map((country) => (
                    <div className="country-card box-edge" key={country.alpha3Code}>
                        <img
                            src={country.flags.png}
                            alt={country.name}
                            onError={(e) => {
                                e.target.onerror = null;   // Prevent infinite loop
                                e.target.src = "/images/tour.jpg";
                            }}
                        />
                        <div className="card-content">
                            <h2>{country.name}</h2>

                            <p>
                                <strong>Capital:</strong> {country.capital}
                            </p>

                            <p>
                                <strong>Region:</strong> {country.region}
                            </p>

                            <p>
                                <strong>Population:</strong>{" "}
                                {country.population.toLocaleString("en-IN")}
                            </p>

                            <button>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};