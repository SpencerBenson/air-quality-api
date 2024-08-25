import { Router, Request, Response } from 'express';
import axios from 'axios';
import 'dotenv/config';

const router = Router();

const nearestCityAPI = process.env.NEAREST_CITY_API as string;
const apiKey = process.env.IQAIR_API_KEY as string;

router.get('/air-quality', async (req: Request, res: Response) => {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).send('Latitude and Longitude must be provided as strings.');
    }

    try {
        const response = await axios.get(nearestCityAPI, {
            params: {
                lat: latitude,
                lon: longitude,
                key: apiKey
            }
        });

        if (response.status !== 200) {
            return res.status(response.status).send('Error fetching air quality data');
        }

        res.json({
            city: response.data.data.city,
            aqi: response.data.data.current.pollution.aqius
        });
    } catch (error ) {
        console.error('Error fetching air quality data:', (error as Error).message);
        res.status(500).send('Error fetching air quality data');
    }
});

export default router;
