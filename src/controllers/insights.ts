import express from "express";
import {
  getInsights,
  getInsightsUsingRegion,
  getInsightsUsingId,
  getInsightsUsingCountry,
  getInsightsUsingStartYear,
  getInsightsUsingEndYear,
  getInsightsUsingTopic,
  getInsightsUsingSector,
  getInsightsUsingSource,
  getInsightsUsingPestle,
} from "../db/insights";

export const getAllInsights = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const insights = await getInsights();
    return res.status(200).json(insights);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getInsightsByRegion = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { region } = req.params;
    const insights = await getInsightsUsingRegion(region);
    return res.status(200).json(insights);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getInsightsById = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const insights = await getInsightsUsingId(id);
    return res.status(200).json(insights);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getInsightsByCountry = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { country } = req.params;
    const insights = await getInsightsUsingCountry(country);
    return res.status(200).json(insights);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getInsightsByStartYear = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const year = parseInt(req.params.year);
    const insights = await getInsightsUsingStartYear(year);
    return res.status(200).json(insights);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getInsightsByEndYear = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const year = parseInt(req.params.year);
    const insights = await getInsightsUsingEndYear(year);
    return res.status(200).json(insights);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getInsightsByTopic = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { topic } = req.params;
    const insights = await getInsightsUsingTopic(topic);
    return res.status(200).json(insights);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getInsightsBySector = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { sector } = req.params;
    const insights = await getInsightsUsingSector(sector);
    return res.status(200).json(insights);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getInsightsBySource = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { source } = req.params;
    const insights = await getInsightsUsingSource(source);
    return res.status(200).json(insights);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getInsightsByPestle = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { pestle } = req.params;
    const insights = await getInsightsUsingPestle(pestle);
    return res.status(200).json(insights);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
