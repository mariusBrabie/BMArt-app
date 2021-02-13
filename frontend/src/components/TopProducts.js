import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
import { useSelector, useDispatch } from 'react-redux'

const TopProducts = () => {
  const dispatch = useDispatch()

  const productTop = useSelector(state => state.productTop)
  const { loading, error, products } = productTop

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-light mb-5'>
      {products.map(product => (
        <Carousel.Item key={product._id}>
          <Link to={`/category/${product.category.toLowerCase()}`}>
            <Image src={product.image} alt={product.name} />

            <Carousel.Caption className='carousel-caption'>
              <h3>{product.category}</h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default TopProducts
