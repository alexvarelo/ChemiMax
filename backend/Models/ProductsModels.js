import { Double } from "mongodb";
import mongoose from "mongoose";

const schema = mongoose.Schema;

const productSchema = new schema({
  _id: { type: String },
  productName: { type: String },
  price: { type: String },
});

export default mongoose.model("product", productSchema);
