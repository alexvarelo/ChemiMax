import express from "express";
import cors from "cors";
import db from "./index.js";
import productModel from "./Models/ProductsModels.js";
import routes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => {
  console.log("Server UP running in port 3000");
});
