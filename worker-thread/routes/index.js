import express from "express";
const router = express.Router();
import { getFibonacci } from "../controllers/calculateFibonacci.js";
router.get("/fibonacci/:number", getFibonacci);
export default router;
