import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, addToCart } from '../actions/cartActions'
import { Col, Row, ListGroup, Image, Button, Card, Form } from 'react-bootstrap'
import { FaRegTrashAlt } from 'react-icons/fa'
import { IoIosArrowBack } from 'react-icons/io'

const CartScreen = ({ history }) => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  const { cartItems } = cart

  useEffect(() => {}, [])

  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id))
  }

  const addToCartHandler = (id, qty) => {
    dispatch(addToCart(id, qty))
  }

  const handleCheckout = () => {
    history.push('/login?redirect=shipping')
  }

  return (
    <>
      {cartItems.length === 0 ? (
        <div className='text-center'>
          <h5 className=' pt-3'>
            <p>Cosul de cumparaturi este gol</p>
          </h5>
          <Link to='/' style={{ color: 'black', lineHeight: '100%' }}>
            <Button variant='secondary'>Incepe cumparaturile</Button>
          </Link>
        </div>
      ) : (
        <>
          <h2 className='py-3'>
            <p className='text-center'>Cos de cumparaturi</p>
          </h2>
          <Row style={{ display: 'flex' }}>
            <Col>
              <ListGroup variant='flush'>
                {cartItems.map(item => (
                  <ListGroup.Item key={item.productId}>
                    <Row className='text-center'>
                      <Col md={4}>
                        <Row>
                          <Col>
                            <Link to={`/products/${item.productId}`}>
                              <Image
                                src={item.image}
                                alt={item.name}
                                rounded
                                fluid
                              />
                            </Link>
                          </Col>
                          <Col>
                            <Link
                              to={`/products/${item.productId}`}
                              style={{ color: 'black' }}
                            >
                              {item.name}
                            </Link>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={2}>
                        <Form>
                          <Form.Control
                            min='1'
                            max={item.countInStock}
                            type='number'
                            value={item.qty}
                            onChange={e =>
                              addToCartHandler(item.productId, e.target.value)
                            }
                          />
                        </Form>
                      </Col>
                      <Col md={3}>{item.price * item.qty} lei </Col>
                      <Col md={2}>
                        <Button
                          type='button'
                          variant='secondary'
                          onClick={() => removeFromCartHandler(item.productId)}
                        >
                          <FaRegTrashAlt />
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>

              <Link to='/' style={{ color: 'black' }}>
                <Button variant='secondary' className='my-4'>
                  <IoIosArrowBack /> Continua Cumparaturile
                </Button>
              </Link>
            </Col>
            <Col md={3} className='mx-0'>
              <Card className='py-3' style={{ background: '#f0f0f0' }}>
                <Row>
                  <h4 className='mx-auto'>
                    {cartItems.reduce((acc, item) => acc + Number(item.qty), 0)}{' '}
                    produse
                  </h4>
                </Row>
                <Row>
                  <h4 className='mx-auto'>
                    {cartItems.reduce(
                      (acc, item) => acc + item.qty * item.price,
                      0
                    )}{' '}
                    lei
                  </h4>
                </Row>
                <Row>
                  <Button className='mx-auto' onClick={handleCheckout}>
                    Finalizeaza comanda
                  </Button>
                </Row>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  )
}

export default CartScreen
