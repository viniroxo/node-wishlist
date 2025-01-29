import { Router } from "express";
import { ProductController } from "../controllers/ProductController";

const router = Router();

router.get("/products", ProductController.getAll);
router.get("/products/:code", ProductController.getByCode);

export default router;
