import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryByCode } from "../api/postApi";

export const CountryDetails = () => {

    const { id } = useParams();
    const [country, setCountry] = useState(null);

    useEffect(() => {

        const fetchCountry = async () => {

            const response = await getCountryByCode(id);

            setCountry(response.data.data.objects[0]);

        };

        fetchCountry();
        
    }, [id]);

    console.log("Country:", country);

    return (
        <div>
            <h1>Country Details Page</h1>
            {country && (
                <h2>{country.names.common}</h2>
            )}
        </div>
    );
};

// import { useTransition } from "react";
// import { useParams } from "react-router-dom";
// // import { getCountryIndData } from "../api/postApi";
// import { Loader } from "../components/UI/Loader";

// export const CountryDetails = () => {
//     const {id} = useParams();

//     const [isPending, startTransition] = useTransition();
//     // const [country, setCountry] = useState(null);

//     // useEffect(() => {
//     //     startTransition(async () => {
//     //         const res = await getCountryIndData(id);
//     //         setCountry(res.data);
//     //         console.log(res.data);
//     //     });
//     // }, []);

//     if (isPending) return <Loader />;

//     console.log({id});
//     return <h1>Hello Details</h1>
// };