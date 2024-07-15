import express from "express";
import { createTour, deleteTour, getAllTour, getFeaturedTours, getSingleTour, getTourBySearch, getTourCount, updateTour } from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create new tour
router.post("/", verifyAdmin ,createTour);

//get all tours
router.get("/", getAllTour);

//get single tour
router.get("/:id", getSingleTour);

//Update tour
router.put("/:id", verifyAdmin, updateTour);

//delete tour
router.delete("/:id", verifyAdmin, deleteTour);

// get tour by search
router.get("/search/getTourBySearch", getTourBySearch);

// get tour by featured = True
router.get("/search/getFeaturedTours", getFeaturedTours);

//get Tours Count
router.get("/search/getTourCount", getTourCount);

export default router;