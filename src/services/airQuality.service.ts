import axios from 'axios';
import AirQuality from '../models/airQuality.model';
import 'dotenv/config';

const nearestCityAPI = process.env.NEAREST_CITY_API as string;
const apiKey = process.env.IQAIR_API_KEY as string;
const latitude = process.env.PARIS_LATITUDE as string;
const longitude = process.env.PARIS_LONGITUDE as string;

export const getAirQuality = async (lat: string, lon: string) => {
    const response = await axios.get(nearestCityAPI, {
        params: {
            lat,
            lon,
            key: apiKey
        }
    });
    return response.data;
};

export const fetchAndSaveAirQuality = async () => {
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
};
