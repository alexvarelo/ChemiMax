import express  from "express"
import cors from 'cors'
import productModel from "./Models/ProductsModels.js";
import routes from './routes/routes.js'

const mostrar =  async () => {
    try {
      const products = await productModel.findAll();
      console.log(products);
    } catch (error) {
     console.log(error.mesage);
    }
  }
  
  mostrar();


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(routes)


app.listen(3000, ()=>{
    console.log('Server UP running in dont know')
})
