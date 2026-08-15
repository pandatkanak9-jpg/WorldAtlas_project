import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryByCode } from "../api/postApi";
import "./CountryDetails.css";
import { Loader } from "../components/UI/Loader";

export const CountryDetails = () => {
    const { id } = useParams();

    const [country, setCountry] = useState(null);
    const [error, setError] = useState("");
    const [laoder, setLoader] = useState(true);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                setError("");
                setCountry(null);

                const response = await getCountryByCode(id);

                const countryData = response.data.data.objects[0];

                if (!countryData) {
                    throw new Error("Country not found");
                }

                setCountry(countryData);

            } catch (error) {
                console.log(error);
                setError("Failed to load country information");
            } finally {
                setLoader(false);
            }
        };

        fetchCountry();
    }, [id]);

    if (laoder) return <Loader />;

    // Your existing loading page can stay here
    if (!country && !error) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div className="country-error">
                <h2>{error}</h2>

                <NavLink to="/country">
                    Back to Countries
                </NavLink>
            </div>
        );
    }

    return (
        <div className="country-details-page">

            <div className="country-details-card">

                {/* ================= HEADER ================= */}

                <div className="country-header">

                    <NavLink
                        to="/country"
                        className="back-link"
                    >
                        ← Back to Countries
                    </NavLink>

                    <div className="country-title">

                        <p className="details-label">
                            COUNTRY DETAILS
                        </p>

                        <h1>
                            {country.names.common}
                        </h1>

                        <p className="official-name">
                            {country.names.official}
                        </p>

                    </div>

                </div>


                {/* ================= MAIN CONTENT ================= */}

                <div className="country-main">

                    {/* LEFT - FLAG */}

                    <div className="flag-section">

                        <div className="flag-card">

                            <img
                                src={country.flag.url_svg}
                                alt={
                                    country.flag.alt ||
                                    country.names.common
                                }
                                className="country-flag"
                            />

                        </div>

                    </div>


                    {/* RIGHT - INFORMATION */}

                    <div className="information-card">

                        <h2>
                            Country Information
                        </h2>


                        {/* Capital */}

                        <div className="info-row">

                            <span>Capital</span>

                            <strong>
                                {country.capitals?.[0]?.name || "N/A"}
                            </strong>

                        </div>


                        {/* Region */}

                        <div className="info-row">

                            <span>Region</span>

                            <strong>
                                {country.region || "N/A"}
                            </strong>

                        </div>

                        {/* Population */}

                        <div className="info-row">

                            <span>Population</span>

                            <strong>
                                {country.population
                                    ? country.population.toLocaleString()
                                    : "N/A"}
                            </strong>

                        </div>


                        {/* Area */}

                        <div className="info-row">

                            <span>Area</span>

                            <strong>
                                {country.area?.kilometers
                                    ? `${country.area.kilometers.toLocaleString()} km²`
                                    : "N/A"}
                            </strong>

                        </div>


                        {/* Currency */}

                        <div className="info-row">

                            <span>Currency</span>

                            <strong>
                                {country.currencies?.[0]?.name || "N/A"}
                            </strong>

                        </div>


                        {/* Currency code */}

                        <div className="info-row">

                            <span>Currency Code</span>

                            <strong>
                                {country.currencies?.[0]?.code || "N/A"}
                            </strong>

                        </div>

                    </div>

                </div>


                {/* ================= LANGUAGES ================= */}

                <div className="details-section">

                    <h2>
                        Languages
                    </h2>

                    <div className="badge-container">

                        {country.languages?.map(
                            (language, index) => (
                                <span
                                    key={index}
                                    className="language-badge"
                                >
                                    {language.name}
                                </span>
                            )
                        )}

                    </div>

                </div>


                {/* ================= CURRENCIES ================= */}

                <div className="details-section">

                    <h2>
                        Currencies
                    </h2>

                    <div className="currency-container">

                        {country.currencies?.map(
                            (currency, index) => (
                                <div
                                    key={index}
                                    className="currency-card"
                                >
                                    <div>
                                        <h3>
                                            {currency.name}
                                        </h3>

                                        <p>
                                            {currency.code}
                                        </p>
                                    </div>

                                    <strong>
                                        {currency.symbol || ""}
                                    </strong>
                                </div>
                            )
                        )}

                    </div>

                </div>


                {/* ================= BORDERS ================= */}

                <div className="details-section">

                    <h2>
                        Border Countries
                    </h2>

                    <div className="badge-container">

                        {country.borders?.length > 0 ? (

                            country.borders.map((border) => (

                                <NavLink
                                    key={border}
                                    to={`/country/${border}`}
                                    className="border-badge"
                                >
                                    {border}
                                </NavLink>

                            ))

                        ) : (

                            <p className="no-data">
                                No bordering countries
                            </p>

                        )}

                    </div>

                </div>


                {/* ================= MAP ================= */}

                <div className="details-section">

                    <h2>
                        Google Maps
                    </h2>

                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${country.names.common}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="map-button"
                    >
                        🌍 Open in Google Maps
                    </a>

                </div>

            </div>

        </div>
    );
};