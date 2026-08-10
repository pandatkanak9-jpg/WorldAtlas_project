import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());

// Route
app.get("/country/:code", async (req, res) => {

    try {

        const code = req.params.code;

        const response = await axios.get(
            `https://api.restcountries.com/countries/v5/codes.alpha_3/${code}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.REST_COUNTRY_API_KEY}`,
                },
            }
        );

        if (response.data.data.objects.length === 0) {
            return res.status(404).json({
                message: "Country not found"
            });
        }

        res.json(response.data);

    } catch (error) {

        console.log(error);

        const status = error.response?.status || 500;

        res.status(status).json({
            message: "Failed to fetch country data"
        });

    }

});

// Start Server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});