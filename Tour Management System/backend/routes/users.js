import express from "express";
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser } from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();

//create new User
router.post("/" , verifyAdmin, createUser);

//get all Users
router.get("/" , verifyAdmin, getAllUser);

//get single User
router.get("/:id" , verifyUser , getSingleUser);

//Update User
router.put("/:id" ,verifyUser , updateUser);

//delete User
router.delete("/:id" ,verifyUser , deleteUser);

export default router;
