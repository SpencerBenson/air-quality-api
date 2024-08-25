import { Router } from 'express';
import { fetchAirQuality } from '../controllers/airQuality.controller';

const router = Router();

router.get('/air-quality', fetchAirQuality);

export default router;
