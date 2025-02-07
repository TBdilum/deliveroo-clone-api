import { restaurantService } from "../services/restaurant.service";
import { z } from "zod";
import { Request, Response } from "express";
import { createRestaurantRequestBodySchema } from "../schema/restaurant.schema";

const getAllRestaurants = async (_req: Request, res: Response) => {
  try {
    const restaurantsArray = await restaurantService.findAll();

    res.status(200).json({
      message: "OK",
      data: restaurantsArray,
    });
  } catch (error) {
    console.log(error, "error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const createNewRestaurant = async (
  req: Request<
    unknown,
    unknown,
    z.infer<typeof createRestaurantRequestBodySchema>
  >,
  res: Response,
) => {
  try {
    const createdRestaurant = await restaurantService.createNew(req.body);

    res.status(201).json({
      message: "Created",
      data: createdRestaurant,
    });
  } catch (error) {
    console.log(error, "error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getARestaurant = async (req: Request, res: Response) => {
  try {
    const foundRestaurant = await restaurantService.findById(req.params.orgID);

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

const updateARestaurantFully = async (req: Request, res: Response) => {
  try {
    const updatedRestaurant = await restaurantService.findByIdAndUpdate(
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

const updateARestaurantPartially = async (req: Request, res: Response) => {
  try {
    const updatedRestaurant = await restaurantService.findByIdAndUpdate(
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

const deleteARestaurant = async (req: Request, res: Response) => {
  try {
    const deletedRestaurant = await restaurantService.findByIdAndDelete(
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
  getAllRestaurants,
  createNewRestaurant,
  getARestaurant,
  updateARestaurantPartially,
  updateARestaurantFully,
  deleteARestaurant,
};
