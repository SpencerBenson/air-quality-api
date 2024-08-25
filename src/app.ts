import express from 'express';
import mongoose from 'mongoose';
import airQualityRouter from './routes/airQuality.route';
import './jobs/airQuality.cron';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/air-quality', airQualityRouter);



const mongoURI = process.env.MONGODB_URI as string;
const connectionName = process.env.MONGODB_CONNECTION_NAME || 'default';

mongoose.connect(mongoURI, {
    dbName: connectionName, 
}).then(() => {
    console.log(`Connected to MongoDB database: ${connectionName}`);
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

export default app;