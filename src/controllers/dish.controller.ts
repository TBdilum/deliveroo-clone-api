import { dishService } from "../services/dish.service";
import { categoryService } from "../services/category.service";
import { Request, Response } from "express";

interface DishFilters {
  restaurant?: string;
  category?: string;}

const getAllDishes = async (req: Request, res: Response) => {
  try {
    const filters: DishFilters = {};

    if (req.query.restaurant) {
      filters.restaurant = req.query.restaurant as string;
    }

    if (req.query.category) {
      filters.category = req.query.category as string;
    }

    const dishesArray = await dishService.findAll(filters, req.query.populate);

    res.status(200).json({
      message: "OK",
      data: dishesArray,
    });
  } catch (error) {
    console.log(error, "error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const createNewDish = async (req: Request, res: Response) => {
  try {
    const foundCategory = await categoryService.findById(req.body.category);

    if (!foundCategory) {
      res.status(404).json({
        message: "Category Not Found",
      });

      return;
    }

    const createdDish = await dishService.createNew({
      ...req.body,
      restaurant: foundCategory.restaurant,
    });

    res.status(201).json({
      message: "Created",
      data: createdDish,
    });
  } catch (error) {
    console.log(error, "error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getADish = async (req: Request, res: Response) => {
  try {
    const foundDish = await dishService.findById(Number(req.params.id));

    if (!foundDish) {
      res.status(404).json({
        message: "Dish not Found",
      });
      return;
    }

    res.status(200).json({
      message: "OK",
      data: foundDish,
    });
  } catch (error) {
    console.log(error, "error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const updateDishFully = async (req: Request, res: Response) => {
  try {
    const foundCategory = await categoryService.findById(req.body.category);

    if (!foundCategory) {
      res.status(404).json({
        message: "Category Not Found",
      });

      return;
    }

    const updatedDish = await dishService.findByIdAndUpdate(Number(req.params.id), {
      ...req.body,
      restaurant: foundCategory.restaurant,
    });

    if (!updatedDish) {
      res.status(404).json({
        message: "Dish Not Found",
      });

      return;
    }

    res.status(200).json({
      message: "OK",
      data: updatedDish,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const updateDishPartially = async (req: Request, res: Response) => {
  try {
    let foundCategory;
    if (req.body.category) {
      foundCategory = await categoryService.findById(req.body.category);

      if (!foundCategory) {
        res.status(404).json({
          message: "Category Not Found",
        });

        return;
      }
    }

    const patchedDish = await dishService.findAndUpdatePartially(
      Number(req.params.id),
      {
        ...req.body,
        ...(foundCategory
          ? {
              restaurant: foundCategory.restaurant,
            }
          : {}),
      },
    );

    if (!patchedDish) {
      res.status(404).json({
        message: "Dish Not Found",
      });
      return;
    }

    res.status(200).json({
      message: "OK",
      data: patchedDish,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const deleteDish = async (req: Request, res: Response) => {
  try {
    const deletedDish = await dishService.findByIdAndDelete(Number(req.params.id));

    if (!deletedDish) {
      res.status(404).json({
        message: "Dish Not Found",
      });
      return;
    }

    res.status(200).json({
      message: "OK",
      data: deletedDish,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export {
  getAllDishes,
  createNewDish,
  getADish,
  updateDishPartially,
  updateDishFully,
  deleteDish,
};
