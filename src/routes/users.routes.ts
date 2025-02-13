import express from "express";
const router = express.Router();
import {
  deleteAnUser,
  getAllUsers,
  getAnUser,
  updateAnUserPartially,
  authenticateUser,
  createNewUser,
  updateAnUserFully,
} from "../controllers/users.controller";

router.get("/", getAllUsers);

router.post("/login", async (req, res) => {
  await authenticateUser(req, res);
});

router.post("/signup", async (req, res) => {
  await createNewUser(req, res);
});

router.get("/:id", getAnUser);

router.patch("/:id", updateAnUserPartially);

router.put("/:id", updateAnUserFully);

router.delete("/:id", deleteAnUser);

export default router;
