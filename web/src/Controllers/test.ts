import axios from "axios";

export interface Product {
  _id: string;
  productName: string;
  price: string;
}

const getProducts = async () => {
  const res = await axios.get("http://localhost:3000/allProducts/");
  const products: Product[] = [];
  const productsWithoutParse = res.data;
  productsWithoutParse.map((x: any) => products.push(JSON.parse(JSON.stringify(x))));
  return products;
};

export default getProducts;
