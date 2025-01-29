import { Request, Response } from "express";
import { ProductService } from "../services/ProductService";
import { Product } from "../models/Product";

export class ProductController {
  static async getAll(req: Request, res: Response) {
    try {
      const products = await ProductService.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async getByCode(req: Request, res: Response) {
    const { code } = req.params;
    try {
      const product = await ProductService.getProductByCode(code);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
