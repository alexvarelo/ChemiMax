import ProductsModels from "../Models/ProductsModels.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductsModels.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
};
