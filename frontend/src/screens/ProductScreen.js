import React, { useState, useEffect } from 'react'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { addToCart } from '../actions/cartActions'

const ProductScreen = ({ match, history }) => {
  const dispatch = useDispatch()
  const { loading, error, product } = useSelector(state => state.productDetails)

  const [qty, setQty] = useState(1)
  const ID = match.params.id

  const decreaseQty = () => {
    qty > 1 ? setQty(qty - 1) : setQty(1)
  }

  const increaseQty = () => {
    qty < product.countInStock ? setQty(qty + 1) : setQty(product.countInStock)
  }

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])

  const addToCartHandler = (id, qty) => {
    dispatch(addToCart(id, qty))
    history.push(`/cart`)
  }

  return (
    <div className='mt-5'>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={4}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h4>{product.name}</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <span>Producator: {product.brand}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={product.rating} />
                {product.numReviews ? (
                  <span> Din {product.numReviews} recenzii</span>
                ) : (
                  <span> Fii primul care evalueaza produsul</span>
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                {product.countInStock ? (
                  <span>In stoc: {product.countInStock} bucati</span>
                ) : (
                  <span>Stocul este gol</span>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <center>
                    <h3>Pret: {product.price} lei</h3>
                  </center>
                </ListGroup.Item>
                <ListGroup.Item
                  className='pl-0'
                  style={{
                    display: 'flex'
                  }}
                >
                  <Col
                    className='m-auto'
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Button
                      onClick={decreaseQty}
                      variant='secondary'
                      className='px-2'
                    >
                      <FiMinus />
                    </Button>
                    <h4 className='my-auto mx-2'>{qty}</h4>
                    <Button
                      onClick={increaseQty}
                      variant='secondary'
                      className='px-2'
                    >
                      <FiPlus />
                    </Button>
                  </Col>
                  <Col className='p-0'>
                    <Button
                      className='btn btn-block'
                      type='button'
                      disabled={!product.countInStock}
                      onClick={() => addToCartHandler(ID, qty)}
                    >
                      Adauga in cos
                    </Button>
                  </Col>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default ProductScreen
