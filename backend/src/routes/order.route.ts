import  express  from 'express';
import { jwtCheck, jwtParse } from "../middleware/auth.ts";
import orderController from '../controllers/order.controller.ts';


const router = express.Router();

router.get("/get", jwtCheck, jwtParse, orderController.getMyOrders);

router.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  jwtParse,
 orderController.createCheckoutSession
);

router.post("/checkout/webhook", orderController.stripeWebhookHandler);

export default router;