import express from'express';
import { createProducts, deleteProduct, getAllProducts, getSingleProduct, updateProduct} from '../controller/productContoller.js';
const router = express.Router();

// Routes
router.route("/products").get(getAllProducts)
.post(createProducts)

router.route("/products/:id").put(updateProduct)
.delete(deleteProduct)
.get(getSingleProduct);

// app.post("/api/v1/products",createProduct)
// app.get("/api/v1/product",getSingleProducts)
// router.route("/product").get(getSingleProduct) **abhi need nahi hai**

export default router;