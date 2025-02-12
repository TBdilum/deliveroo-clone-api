import express from "express";
const router = express.Router();
import {
  deleteAnUser,
  getAllUsers,
  getAnUser,
  updateAnUserPartially,
  authenticateUser,
  createAnNewUser,
  updateAnUserFully,
} from "../controllers/users.controller";

router.get("/", getAllUsers);

router.post("/login", authenticateUser);

router.post("/signup", createAnNewUser);

router.get("/:id", getAnUser);

router.patch("/:id", updateAnUserPartially);

router.put("/:id", updateAnUserFully);

router.delete("/:id", deleteAnUser);

export default router;
