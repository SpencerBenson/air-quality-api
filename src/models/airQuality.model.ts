import mongoose, { Schema, Document } from 'mongoose';

interface IAirQuality extends Document {
    city: string;
    aqi: number;
    time: Date;
}

const AirQualitySchema: Schema = new Schema({
    city: { type: String, required: true },
    aqi: { type: Number, required: true },
    time: { type: Date, default: Date.now },
});

const AirQuality = mongoose.model<IAirQuality>('AirQuality', AirQualitySchema);
export default AirQuality;
