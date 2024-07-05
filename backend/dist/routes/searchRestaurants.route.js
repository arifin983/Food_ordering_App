import express from "express";
import { param } from "express-validator";
import searchRestaurantsController from "../controllers/searchRestaurants.controller.ts";
const router = express.Router();
router.get("/:restaurantId", param("restaurantId")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("RestaurantId parameter must be a valid string"), searchRestaurantsController.getRestaurant);
router.get("/search/:city", param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City parameter must be a valid string"), searchRestaurantsController.searchRestaurant);
export default router;
//# sourceMappingURL=searchRestaurants.route.js.map