import express from 'express'
const router= express.Router()
import { getProducts, getProductById, getTopProducts} from '../controllers/productController.js'

//mongoose always gives out Promises,
//and we use asyncHandler to simplify the try-catch in express

// router.get('/', asyncHandler(async(req,res)=>{}))

router.route('/').get(getProducts)
router.get('/top',getTopProducts)
router.route('/:id').get(getProductById)

export default router