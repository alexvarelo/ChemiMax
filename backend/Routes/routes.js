import express from 'express'
import { getAllProducts } from '../controllers/ProductsController.js'
const router = express.Router()

router.get('/', getAllProducts)
/* 
router.get('/:id', getBlog)
router.post('/', createBlog)
router.put('/:id', updateBlog)
router.delete('/:id', deleteBlog) */

export default router