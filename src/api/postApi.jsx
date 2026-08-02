import axios from "axios";

const api = axios.create({
  baseURL: "https://countries.dev",
});

export const getCountryData = () => {
  return api.get(
    "/countries?sort=name&fields=name,capital,region,population,flags,alpha3Code"
  );
}