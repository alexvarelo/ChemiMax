import productModel from '../Models/ProductsModels.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
};
