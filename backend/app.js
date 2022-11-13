import express  from "express"
import cors from 'cors'
import { getAllProducts } from './Controllers/ProductsController.js'
//importamos la conexión a la DB
import db from "./index.js"
//importamos nuestro enrutador
import AllProductRoutes from './routes/routes.js'
const router = express.Router()

console.log(router.get('/', getAllProducts));

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/products', router.get('/', getAllProducts))

app.listen(27017, ()=>{
    console.log('Server UP running in http://localhost')
})