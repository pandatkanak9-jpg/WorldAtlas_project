import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryByCode } from "../api/postApi";
import { Loader } from "../components/UI/Loader";

export const CountryDetails = () => {
    const { id } = useParams();

    const [country, setCountry] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                setError("");

                const response = await getCountryByCode(id);

                const countryData = response.data.data.objects[0];

                console.log("Country data:", countryData);

                setCountry(countryData);
            } catch (error) {
                console.log(error);
                setError("Failed to fetch country data");
            } finally {
                setLoading(false);
            }
        };

        fetchCountry();
    }, [id]);

    if (loading) return <Loader />;

    return (
        <div>
            <h1>Country Details Page</h1>

            {error && <p>{error}</p>}

            {country && (
                <div>
                    <h2>{country.names.common}</h2>
                    <img
                        src={country.flag.url_svg}
                        alt={country.flag.alt || country.names.common}
                        width="300"
                    />
                    <p>Official Name: {country.names.official}</p>
                    <p>Capital: {country.capitals?.[0]?.name || "N/A"}</p>
                    <p>Region: {country.region}</p>
                    <p>Population: {country.population}</p>
                    <p>Currency: {country.currencies?.[0]?.name || "N/A"}</p>
                    <p>Currency Code: {country.currencies?.[0]?.code || "N/A"}</p>
                    <p>Symbol: {country.currencies?.[0]?.symbol || "N/A"} </p>
                    <div>
                        <p>Languages: </p>

                        <div>
                            {country.languages?.map((language) => (
                                <p key={language.iso639_3}>
                                    {language.name}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};