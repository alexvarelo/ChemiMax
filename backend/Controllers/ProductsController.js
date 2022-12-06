import productModel from '../Models/ProductsModels.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await productModel.findById(req.id);
    res.status(200).json(product);
  }
  catch (error) {
    res.json({ message: error.message });
  }
}