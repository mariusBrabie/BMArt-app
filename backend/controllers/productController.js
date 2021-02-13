import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

// fetch all products
// GET /api/products
// public route
export const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 12
  const page = Number(req.query.pageNumber) || 1
  const keyword = req.query.keyword
    ? {
        $or: [
          {
            name: {
              $regex: req.query.keyword,
              $options: 'i'
            }
          },
          {
            category: {
              $regex: req.query.keyword,
              $options: 'i'
            }
          }
        ]
      }
    : {}

  const category = req.query.category
    ? {
        category: {
          $regex: req.query.category,
          $options: 'i'
        }
      }
    : {}

  const countKeyword = await Product.countDocuments({ ...keyword })
  const countMax = await Product.countDocuments({})
  const countCategory = await Product.countDocuments({ ...category })
  let products, count

  if (countKeyword === countMax) {
    products = await Product.find({ ...category })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
    count = countCategory
  } else {
    products = await Product.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
    count = countKeyword
  }
  res.json({ products, page, pages: Math.ceil(count / pageSize) })
})

// fetch single product
// GET /api/products/:id
// public route
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Produsul nu a fost gasit!')
  }
})

// fetch top rated products
// GET /api/products/top
// public route
export const getTopProducts = asyncHandler(async (req, res) => {
  const creioaneProduct = await Product.find({ category: 'Creioane' })
    .sort({ rating: -1 })
    .limit(1)
  const hartieProduct = await Product.find({ category: 'Hartie desen' })
    .sort({ rating: -1 })
    .limit(1)
  const accesoriiProduct = await Product.find({ category: 'Accesorii' })
    .sort({ rating: -1 })
    .limit(1)
  const products = creioaneProduct
    .concat(hartieProduct)
    .concat(accesoriiProduct)

  //const products = await Product.find({}).sort({ rating: -1 }).limit(3)
  res.json(products)
})
