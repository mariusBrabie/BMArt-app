import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <div className='mb-5'>
      <Card className='my-3 pt-1 rounded prod-card'>
        <Link to={`/products/${product._id}`}>
          <Card.Img
            src={product.image}
            variant='top'
            className='rounded prod-img'
          />
        </Link>
        <Link to={`/products/${product._id}`}>
          <Card.Text as='h5' className='text-center product-name p-2'>
            {product.name.length > 20 ? (
              <div>
                <span className='shown'>
                  {product.name.substring(0, 17)}...
                </span>
                <span className='hidden'>{product.name}</span>
              </div>
            ) : (
              <div>
                <span className='shown'>{product.name}</span>
                <span className='hidden'>
                  <span>{product.name}</span>
                </span>
              </div>
            )}
          </Card.Text>
        </Link>
      </Card>
      {
        <div className='text-center'>
          <Rating value={product.rating} />
        </div>
      }
      <h5 className='text-center p-2 pb-0 mb-0'>{product.price} lei</h5>
      {
        <Link to={`/products/${product._id}`}>
          <Button className='text-center btn-block' variant='outline-primary'>
            Detalii
          </Button>
        </Link>
      }
    </div>
  )
}

export default Product
