import { categoryService } from "../services/category.service";
import { restaurantService } from "../services/restaurant.service";
import { Request, Response } from "express";

interface CategoryFilters {
  restaurant?: string;
}

interface FoundRestaurant {
  restaurant: string | null | number;
}
const getAllCategories = async (req: Request, res: Response) => {
  try {
    const filters: CategoryFilters = {};

    if (req.query.restaurant) {
      filters.restaurant = req.query.restaurant as string;
    }

    const categoriesArray = await categoryService.findAll(
      filters,
      req.query.populate,
    );

    res.status(200).json({
      message: "OK",
      data: categoriesArray,
    });
  } catch (error) {
    console.log(error, "error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const createNewCategory = async (req: Request, res: Response) => {
  try {
    const foundRestaurant = (await restaurantService.findById(
      req.body.restaurant,
    )) as FoundRestaurant | null;

    if (!foundRestaurant) {
      res.status(404).json({
        message: "Restaurant Not Found",
      });

      return;
    }

    const createdCategory = await categoryService.createNew(req.body);

    res.status(201).json({
      message: "Created",
      data: createdCategory,
      restaurant: foundRestaurant.restaurant as string,
    });
  } catch (error) {
    console.log(error, "error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getCategory = async (req: Request, res: Response) => {
  try {
    const foundCategory = await categoryService.findById(Number(req.params.id));

    if (!foundCategory) {
      res.status(404).json({
        message: "Category Not Found",
      });

      return;
    }

    res.status(200).json({
      message: "OK",
      data: foundCategory,
    });
  } catch (error) {
    console.log(error, "error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const updateCategoryFully = async (req: Request, res: Response) => {
  try {
    const foundRestaurant = await restaurantService.findById(
      req.body.restaurant,
    );

    if (!foundRestaurant) {
      res.status(404).json({
        message: "Restaurant Not Found",
      });

      return;
    }

    const updatedCategory = await categoryService.findByIdAndUpdate(
      Number(req.params.id),
      req.body,
    );

    if (!updatedCategory) {
      res.status(404).json({
        message: "Category Not Found",
      });

      return;
    }
    res.status(200).json({
      message: "OK",
      data: updatedCategory,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const updateCategoryPartially = async (req: Request, res: Response) => {
  try {
    if (req.body.restaurant) {
      const foundRestaurant = await restaurantService.findById(
        req.body.restaurant,
      );

      if (!foundRestaurant) {
        res.status(404).json({
          message: "Restaurant Not Found",
        });

        return;
      }
    }

    const patchedCategory = await categoryService.findAndUpdatePartially(
      Number(req.params.id),
      req.body,
    );

    if (!patchedCategory) {
      res.status(404).json({
        message: "Category Not Found",
      });
      return;
    }

    res.status(200).json({
      message: "OK",
      data: patchedCategory,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const deleteCategory = async (req: Request, res: Response) => {
  try {
    const deletedCategory = await categoryService.findByIdAndDelete(
      Number(req.params.id),
    );

    if (!deletedCategory) {
      res.status(404).json({
        message: "Category Not Found",
      });

      return;
    }

    res.status(200).json({
      message: "OK",
      data: deletedCategory,
    });
    return;
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export = {
  getAllCategories,
  createNewCategory,
  getCategory,
  updateCategoryPartially,
  updateCategoryFully,
  deleteCategory,
};
