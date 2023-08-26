import {Router} from "express";
import {
  getAllProducts,
  getProductDetails,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  deleteReview,
  getProductReviews,
  getAdminProducts,
} from "../comtroller/productcontroller.js";
import { isAuthenticatedUser, authorizeRoles } from "../middleware/auth.js";
const router = Router();

router.get("/products",getAllProducts);

router.get("/admin/products",isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

router.post("/product/new",isAuthenticatedUser, authorizeRoles("user"), createProduct);


router.put("/product/:id",isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
router.delete("/product/:id",isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)
router.get(getProductDetails);

router.put("/review",isAuthenticatedUser, createProductReview);

router.get("/reviews",getProductReviews).delete(deleteReview);

// router
// .route("/review").put(isAuthenticatedUser,createProductReview);

// router
//   .route("/reviews")
//   .get(getProductReviews)
//   .delete(isAuthenticatedUser, deleteReview);

// export default productRroute;
export const productRroute = router;
