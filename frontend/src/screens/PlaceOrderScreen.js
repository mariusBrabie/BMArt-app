import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'

const PlaceOrderScreen = ({ history }) => {
  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()

  cart.itemsPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  )
  cart.shippingPrice = cart.itemsPrice >= 200 ? 0 : 20
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice

  const orderCreate = useSelector(state => state.orderCreate)
  const { order, success } = orderCreate

  useEffect(() => {
    if (success) {
      history.push(`/orders/${order._id}?fromPlaceOrderScreen`)
    }
    // eslint-disable-next-line
  }, [success, history])

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        totalPrice: cart.totalPrice
      })
    )
  }

  return (
    <div>
      <CheckoutSteps step1 step2 step3 />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h4>Livrare</h4>
              <p>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                {cart.shippingAddress.postalCode},{' '}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h4>Produse</h4>
              {cart.cartItems.length === 0 ? (
                <Message>Nu ai adaugat niciun produs</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map(item => (
                    <ListGroup.Item key={item.productId}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/products/${item.productId}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x {item.price} lei ={' '}
                          {item.qty * item.price} lei
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <h4>Rezumatul comenzii</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Produse:</Col>
                  <Col>{cart.itemsPrice} lei</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Transport:</Col>
                  <Col>{cart.shippingPrice} lei</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total:</Col>
                  <Col>{cart.totalPrice} lei</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
            <Button
              className='btn-block'
              type='button'
              onClick={placeOrderHandler}
            >
              Plaseaza comanda
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default PlaceOrderScreen
