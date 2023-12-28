import mongoose from "mongoose";

const InsightSchema = new mongoose.Schema({
  endYear: { type: String, trim: true }, // Allow empty string
  intensity: { type: Number, required: true },
  sector: { type: String, trim: true }, // Allow empty string
  topic: { type: String, trim: true }, // Allow empty string
  insight: { type: String, required: true },
  url: { type: String, required: true },
  region: { type: String, required: true },
  startYear: { type: String, trim: true }, // Allow empty string
  impact: { type: String, trim: true }, // Allow empty string
  added: { type: Date, default: Date.now },
  published: { type: Date, required: true },
  country: { type: String, trim: true }, // Allow empty string
  relevance: { type: Number, required: true },
  pestle: { type: String, trim: true }, // Allow empty string
  source: { type: String, required: true },
  title: { type: String, required: true },
  likelihood: { type: Number, required: true },
});

export const InsightModel = mongoose.model(
  "ClimateInsight",
  InsightSchema,
  "climate_insights"
);

export const getInsightsUsingRegion = (region: string) =>
  InsightModel.find({
    region,
  });

export const getInsightsUsingId = (id: string) => InsightModel.findById(id);
export const getInsightsUsingCountry = (country: string) =>
  InsightModel.find({ country });

export const getInsightsUsingStartYear = (year: number) =>
  InsightModel.find({ start_year: year });
export const getInsightsUsingEndYear = (year: number) =>
  InsightModel.find({ end_year: year });
export const getInsightsUsingTopic = (topic: string) =>
  InsightModel.find({ topic });

export const getInsights = () => InsightModel.find();

export const getInsightsUsingSector = (sector: string) =>
  InsightModel.find({ sector });

export const getInsightsUsingSource = (source: string) =>
  InsightModel.find({ source });

export const getInsightsUsingPestle = (pestle: string) =>
  InsightModel.find({ pestle });
