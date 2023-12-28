import express from "express";
import {
  getAllInsights,
  getInsightsByCountry,
  getInsightsById,
  getInsightsByRegion,
  getInsightsByTopic,
  getInsightsByStartYear,
  getInsightsByEndYear,
  getInsightsBySector,
  getInsightsBySource,
  getInsightsByPestle,
} from "../controllers/insights";
import { isAuthenticated, isOwner } from "../middlewares/index";

export default (router: express.Router) => {
  router.get("/insights", isAuthenticated, getAllInsights);
  router.get("/insights/:id", isAuthenticated, getInsightsById);
  router.get("/insights/region/:region", isAuthenticated, getInsightsByRegion);
  router.get("/insights/topic/:topic", isAuthenticated, getInsightsByTopic);
  router.get("/insights/source/:source", isAuthenticated, getInsightsBySource);
  router.get("/insights/pestle/:pestle", isAuthenticated, getInsightsByPestle);
  router.get("/insights/sector/:sector", isAuthenticated, getInsightsBySector);
  router.get(
    "/insights/start_year/:year",
    isAuthenticated,
    getInsightsByStartYear
  );
  router.get("/insights/end_year/:year", isAuthenticated, getInsightsByEndYear);
  router.get(
    "/insights/country/:country",
    isAuthenticated,
    getInsightsByCountry
  );
};
