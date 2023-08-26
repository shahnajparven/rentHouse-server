import {Router} from "express";
import {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser,
  deleteUser,
  updateUserRole,
} from "../comtroller/userController.js";
import { isAuthenticatedUser, authorizeRoles } from "../middleware/auth.js";

const router = Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.post("/password/forgot",forgotPassword);
router.put("/password/reset/:token",resetPassword);
router.get("/logout",logout);
router.get("/me",isAuthenticatedUser, getUserDetails);
router.put("/password/update",isAuthenticatedUser, updatePassword);
router.put("/me/update",isAuthenticatedUser, updateProfile);

router.get("/admin/users",isAuthenticatedUser, authorizeRoles("admin"), getAllUser);
// router.route("/admin/user/:id").get( isAuthenticatedUser,authorizeRoles("admin"),getSingleUser);

router.get("/admin/user/:id",isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
router.put("/admin/user/:id",isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
router.delete("/admin/user/:id",isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

// export default userRroute;
export const userRroute = router;