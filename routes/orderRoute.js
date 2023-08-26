import  { Router } from "express";
import {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} from "../comtroller/orderController.js";
// const router = express.Router();

import { isAuthenticatedUser, authorizeRoles } from "../middleware/auth.js";


const router = Router();

router.post('/order/new',isAuthenticatedUser, newOrder);

router.get("/order/:id",isAuthenticatedUser, getSingleOrder);

router.get("/orders/me",isAuthenticatedUser, myOrders);

router.get("/admin/orders",isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);

router.put("/admin/order/:id",isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
router.delete("/admin/order/:id",isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);
  

export const orderRoute = router;