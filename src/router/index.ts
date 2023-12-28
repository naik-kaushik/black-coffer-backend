import express from "express";
import authentication from "./authentication";
import users from "./users";
import insights from "./insights";
const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  insights(router);
  return router;
};
