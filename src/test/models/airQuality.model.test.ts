import mongoose from 'mongoose';
import AirQuality from '../../models/airQuality.model';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer: MongoMemoryServer;

describe('AirQuality Model Test', () => {
    beforeAll(async () => {
        // Start an in-memory MongoDB instance
        mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri(), {});
    });

    afterAll(async () => {
        // Clean up and close the connection
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongoServer.stop();
    });

    afterEach(async () => {
        // Clear the collections after each test
        await AirQuality.deleteMany({});
    });

    it('should create and save an air quality record successfully', async () => {
        // Prepare the data
        const airQualityData = new AirQuality({
            city: 'Paris',
            aqi: 50,
            time: new Date(),
        });

        // Save the data
        const savedData = await airQualityData.save();

        // Validate the saved data
        expect(savedData._id).toBeDefined();
        expect(savedData.city).toBe('Paris');
        expect(savedData.aqi).toBe(50);
        expect(savedData.time).toBeInstanceOf(Date);
    });

});
