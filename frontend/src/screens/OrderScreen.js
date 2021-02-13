import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  getOrderDetails,
  resetSuccessOrderCreate
} from '../actions/orderActions'
import { resetCartItems } from '../actions/cartActions'

const OrderScreen = ({ match, location }) => {
  const orderId = match.params.id

  const dispatch = useDispatch()

  const orderDetails = useSelector(state => state.orderDetails)
  const { order, loading, error } = orderDetails

  if (!loading) {
    order.itemsPrice = order.orderItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    )
    order.shippingPrice = order.itemsPrice >= 200 ? 0 : 20
    order.totalPrice = order.itemsPrice + order.shippingPrice
  }

  useEffect(() => {
    if (location.search.length > 0) {
      dispatch(resetCartItems())
      dispatch(resetSuccessOrderCreate())
    }
    dispatch(getOrderDetails(orderId))
  }, [dispatch, orderId, location.search])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <div>
      {' '}
      <h4 className='mt-4 mb-5 text-center'>Comanda {orderId}</h4>{' '}
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h4>Livrare</h4>
              <p>
                {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                {order.shippingAddress.postalCode},{' '}
                {order.shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h4>Produse</h4>
              {order.orderItems.length === 0 ? (
                <Message>Nu ai comandat niciun produs</Message>
              ) : (
                <ListGroup variant='flush'>
                  {order.orderItems.map(item => (
                    <ListGroup.Item key={item._id}>
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
                          <Link to={`/products/${item.id}`}>{item.name}</Link>
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
                  <Col>{order.itemsPrice} lei</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Transport:</Col>
                  <Col>{order.shippingPrice} lei</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total:</Col>
                  <Col>{order.totalPrice} lei</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default OrderScreen
