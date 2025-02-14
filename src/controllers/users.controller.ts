import { usersService } from "../services/users.service";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY as string;

const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const UsersArray = await usersService.findAll();

    res.status(200).json({
      message: "OK",
      data: UsersArray,
    });
  } catch (error) {
    console.log(error, "error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const authenticateUser = async (req: Request, res: Response) => {
  const { name, password } = req.body;

  try {
    const existingUser = await usersService.findById(name);

    if (!existingUser) {
      return res
        .status(404)
        .json({ message: "User not found.Please Create An Account" });
    }

    if (existingUser.password !== password) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign({ name: existingUser.name }, SECRET_KEY);
    return res.status(200).json({
      message: "Authenticated",
      token: token,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const createNewUser = async (req: Request, res: Response) => {
  const { name, password } = req.body;

  try {
    const existingUser = await usersService.findById(name);

    if (existingUser) {
      return res.status(409).json({
        message: "User Already Exists. Please Login",
      });
    }

    const createdUser = await usersService.createNew({ name, password });

    const token = jwt.sign({ name: createdUser.name }, SECRET_KEY);

    return res.status(201).json({
      message: "User Created",
      token: token,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getAnUser = async (req: Request, res: Response) => {
  try {
    const foundRestaurant = await usersService.findById(req.params.orgID);

    if (!foundRestaurant) {
      res.status(404).json({
        message: "Restaurant Not found",
      });

      return;
    }

    res.status(200).json({
      message: "OK",
      data: foundRestaurant,
    });
  } catch (error) {
    console.log(error, "error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const updateAnUserFully = async (req: Request, res: Response) => {
  try {
    const updatedRestaurant = await usersService.findByIdAndUpdate(
      req.params.id,
      req.body,
    );

    if (!updatedRestaurant) {
      res.status(404).json({
        message: "Restaurant Not found",
      });

      return;
    }

    res.status(200).json({
      message: "Updated Restaurant",
      data: updatedRestaurant,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const updateAnUserPartially = async (req: Request, res: Response) => {
  try {
    const updatedRestaurant = await usersService.findByIdAndUpdate(
      req.params.id,
      req.body,
    );

    if (!updatedRestaurant) {
      res.status(404).json({
        message: "Restaurant Not found",
      });

      return;
    }

    res.status(200).json({
      message: "OK",
      data: updatedRestaurant,
    });
    return;
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const deleteAnUser = async (req: Request, res: Response) => {
  try {
    const deletedRestaurant = await usersService.findByIdAndDelete(
      req.params.id,
    );

    if (!deletedRestaurant) {
      res.status(404).json({
        message: "Restaurant Not found",
      });

      return;
    }

    res.status(200).json({
      message: "OK",
      data: deletedRestaurant,
    });
    return;
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export {
  getAllUsers,
  authenticateUser,
  createNewUser,
  getAnUser,
  updateAnUserPartially,
  updateAnUserFully,
  deleteAnUser,
};
