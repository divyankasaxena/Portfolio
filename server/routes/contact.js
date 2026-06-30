import express from "express";
import { createContactMessage, listContactMessages } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", createContactMessage);
router.get("/", listContactMessages); // intended for authenticated/admin use only in production

export default router;
