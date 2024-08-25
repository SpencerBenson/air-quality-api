import { Request, Response } from 'express';
import { getAirQuality } from '../services/airQuality.service';

export const fetchAirQuality = async (req: Request, res: Response): Promise<void> => {
    const { latitude, longitude } = req.query;
    
    if (!latitude || !longitude) {
        res.status(400).send('Latitude and Longitude are required');
        return; 
    }
    
    try {
       
        const airQualityData = await getAirQuality(latitude as string, longitude as string);
        res.json(airQualityData);
    } catch (error) {
        console.error('Error fetching air quality data:', error);
        res.status(500).send('Error fetching air quality data');
    }
};
