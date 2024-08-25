import request from 'supertest';
import express, { Express } from 'express';
import { fetchAirQuality } from '../../controllers/airQuality.controller';
import * as airQualityService from '../../services/airQuality.service';

// Mock the getAirQuality function
jest.mock('../../services/airQuality.service');

const app: Express = express();
app.use(express.json());
app.get('/air-quality', fetchAirQuality);

describe('fetchAirQuality', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return 400 if latitude or longitude is missing', async () => {
        const response = await request(app).get('/air-quality?latitude=12.34');
        expect(response.status).toBe(400);
        expect(response.text).toBe('Latitude and Longitude are required');
    });

  
  
});
