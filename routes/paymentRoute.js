import {Router} from "express";
import {
  processPayment,
  sendStripeApiKey,
} from "../comtroller/paymentController.js";
const router = Router();

import { isAuthenticatedUser } from "../middleware/auth.js";

router.post("/payment/process",isAuthenticatedUser, processPayment);

router.get("/stripeapikey",isAuthenticatedUser, sendStripeApiKey);

export const PaymentRoute = router;
