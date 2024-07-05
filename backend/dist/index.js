import { v2 as cloudinary } from 'cloudinary';
import cors from "cors";
import express from "express";
import "dotenv/config";
import userRouter from "./routes/user.route.ts";
import restaurantRouter from "./routes/restaurant.route.ts";
import searchRestaurantRouter from "./routes/searchRestaurants.route.ts";
import orderRouter from "./routes/order.route.ts";
import mongoose from "mongoose";
mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
    console.log("Server connected to database successfully");
});
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const app = express();
app.use(cors());
app.use("/api/order/checkout/webhook", express.raw({ type: "*/*" }));
app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/restaurant", restaurantRouter);
app.use("/api/v1/restaurants", searchRestaurantRouter);
app.use("/api/v1/order", orderRouter);
app.listen(7000, () => {
    console.log("server started at localhost:7000");
});
//# sourceMappingURL=index.js.map