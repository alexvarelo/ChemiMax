import axios from 'axios';

interface Product {
    _id: string,
    productName: string,
    price: string
} 

const getProducts = async () => {
    const res = await axios.get('http://localhost:3000/allProducts/');
    const products: Product[] = [];
    res.data.map((x: any) => products.push(JSON.parse(x)));
    return products;
}



export default getProducts;