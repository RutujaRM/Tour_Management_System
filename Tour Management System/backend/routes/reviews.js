import express from 'express';
import createView from '../controllers/reviewController.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/:tourId' , verifyUser, createView )

export default router