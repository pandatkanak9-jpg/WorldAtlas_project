import axios from "axios";

// countries.dev API — currently used by Country.jsx
const countryApi = axios.create({
    baseURL: "https://countries.dev",
});

export const getCountryData = () => {
    return countryApi.get(
        "/countries?sort=name&fields=name,capital,region,population,flags,alpha3Code"
    );
};


// Our Express backend — used by CountryDetails.jsx
const backendApi = axios.create({
    baseURL: "http://localhost:5000",
});

export const getCountryByCode = (code) => {
    return backendApi.get(`/country/${code}`);
};