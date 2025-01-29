import * as fs from "fs";
import * as path from "path";
import { Product } from "../models/Product";

const filePath = path.join(__dirname, "../../data/mock-products.json");

export class ProductRepository {
  static async getAll(): Promise<Product[]> {
    const data = await fs.promises.readFile(filePath, "utf-8");
    return JSON.parse(data);
  }

  static async getByCode(code: string): Promise<Product | undefined> {
    const data = await this.getAll();
    return data.find((product) => product.code === code);
  }
}
