import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    _id: ObjectId,
    productName: String,
    price: String 
  },
  {
    collection: "Products",
  }
);

export default mongoose.model("productModel", productSchema);

