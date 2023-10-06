import express from "express";

// Import Task controllers
import { test } from "../controllers/testController.js";

const router = express.Router();

// Task Routes
router.post("/test", test);

export default router;
