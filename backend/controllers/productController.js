import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

//mongoose always gives out Promises,
//and we use asyncHandler to simplify the try-catch in express

// @desc   Fetch all products
// @route  GET /api/products
// @access Public
const getProducts = asyncHandler(async(req,res) => {
    const keyword = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}

    const products = await Product.find({ ...keyword })
    // res.status(401)
    // throw new Error('Not Authorized')
    res.json(products)
})

// @desc   Fetch single product
// @route  GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async(req,res) => {

    const product =  await Product.findById(req.params.id) //mongoose method
    
    if(product){
        res.json(product)
    } else {
        res.status(404)  //.json({message:'Product not found'})
        throw new Error ('Product not found')
    }
})

// @desc   Get top rated products
// @route  GET /api/products//top
// @access Public
const getTopProducts = asyncHandler(async(req,res) => {
    const products =  await Product.find({}).sort({rating:-1}).limit(3)
    
    res.json(products)
})

export{ getProducts, getProductById, getTopProducts }