import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import ProductRoutes from "./routes/ProductRoutes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", ProductRoutes);

export default app;
