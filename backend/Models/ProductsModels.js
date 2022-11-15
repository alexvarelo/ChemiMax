import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const schema = mongoose.Schema;

const productSchema = new schema(
  {
    _id: { type: ObjectId },
    productName: { type: String },
    price: { type: String }
  },
  {
    collection: "Products",
  }
);

export default mongoose.model("productModel", productSchema);

