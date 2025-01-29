import { ProductRepository } from "../repositories/ProductRepository";
import { Product } from "../models/Product";

export class ProductService {
  static async getAllProducts(): Promise<Product[]> {
    return await ProductRepository.getAll();
  }

  static async getProductByCode(code: string): Promise<Product | undefined> {
    return await ProductRepository.getByCode(code);
  }
}
