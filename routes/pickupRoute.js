import { Router } from "express";
import {
  createPickup,
  getAdminPickups,
  updatePickup,
  deletePickup,
} from "../comtroller/pickupController.js";
import { isAuthenticatedUser, authorizeRoles } from "../middleware/auth.js";

const router = Router();

router.get(
  "/admin/pickups",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAdminPickups
);

router.post("/pickup/new", createPickup);

router.put("/pickup/:id",isAuthenticatedUser, authorizeRoles("admin"), updatePickup)
router.delete("/pickup/:id",isAuthenticatedUser, authorizeRoles("admin"), deletePickup);

// export default pickupRoute;
export const pickupRoute = router;
