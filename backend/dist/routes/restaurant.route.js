import express from "express";
import multer from "multer";
import restaurantController from "../controllers/restaurant.controller.ts";
import { validateRestaurantRequest } from "../middleware/validations.ts";
import { jwtCheck, jwtParse } from "../middleware/auth.ts";
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 5 * 1024 * 1024 //5MB
    }
});
router.post("/create", upload.single("imageFile"), validateRestaurantRequest, jwtCheck, jwtParse, restaurantController.createRestaurant);
router.get("/get", jwtCheck, jwtParse, restaurantController.getMyRestaurant);
router.put("/update", upload.single("imageFile"), validateRestaurantRequest, jwtCheck, jwtParse, restaurantController.updateMyRestaurant);
router.get("/order", jwtCheck, jwtParse, restaurantController.getMyRestaurantOrders);
router.patch("/order/:orderId/status", jwtCheck, jwtParse, restaurantController.updateOrderStatus);
export default router;
//# sourceMappingURL=restaurant.route.js.map