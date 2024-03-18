import { Document, Schema, Model, model } from 'mongoose';

export interface City {
  name: string;
}

export interface CityDocument extends City, Document {}

export const CitySchema: Schema<CityDocument> = new Schema({
  name: { type: String, required: false, unique: true },
});

export const CityModel: Model<CityDocument> = model<CityDocument>('City', CitySchema);
