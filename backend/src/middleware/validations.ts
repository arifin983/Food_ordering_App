import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

export const validateUserRequest = [
  body("name").isString().notEmpty().withMessage("Name must be a string"),
  body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("AddressLine1 must be a string"),
  body("city").isString().notEmpty().withMessage("City must be a string"),
  body("country").isString().notEmpty().withMessage("Country must be a string"),
  handleValidationErrors,
];
export const validateRestaurantRequest = [
  body("restaurantName").notEmpty().withMessage("restaurant name is required"),
  body("city").notEmpty().withMessage("city is required"),
  body("country").notEmpty().withMessage("country is required"),
  body("deliveryPrice").isFloat({ min: 0 }).withMessage("Delivery price must be a positive number"),
  body("estimatedDeliveryTime").isInt({ min: 0 }).withMessage("Estimated delivery time must be a positive integer"),
  body("cuisines").isArray().withMessage("Cuisine must an array").not().isEmpty().withMessage("Cuisine array can not be empty"),
  body("menuItems").isArray().withMessage("menu items must be an array"),
  body("menuItems.*.name").notEmpty().withMessage("Menu item name is required"),
  body("menuItems.*.price").isFloat({min:0}).withMessage("Menu item price is required and must be a positive number"),
  handleValidationErrors,
];