
import { CronJob } from 'cron';
import axios from 'axios';
import mongoose from 'mongoose';
import AirQuality from '../models/airQuality.model';
import 'dotenv/config';

const nearestCityAPI = process.env.NEAREST_CITY_API as string;
const apiKey = process.env.IQAIR_API_KEY as string;
const latitude = process.env.PARIS_LATITUDE as string;
const longitude = process.env.PARIS_LONGITUDE as string;

const job = new CronJob('*/1 * * * *', async () => {
    try {
        const response = await axios.get(nearestCityAPI, {
            params: {
                lat: latitude,
                lon: longitude,
                key: apiKey
            }
        });

        const airQualityData = new AirQuality({
            city: response.data.data.city,
            aqi: response.data.data.current.pollution.aqius,
            time: new Date(),
        });

        await airQualityData.save();
        console.log('Air quality data saved for Paris');
    } catch (error) {
        console.error('Error fetching air quality data:', error);
    }
});

job.start();
