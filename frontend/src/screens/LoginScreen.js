import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLoginLogout = useSelector(state => state.userLoginLogout)
  const { loading, error, userInfo } = userLoginLogout

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const onSubmitHandler = e => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <p className='pt-5'></p>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={onSubmitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Adresa de email</Form.Label>
          <Form.Control
            placeholder='Email'
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Parola</Form.Label>
          <Form.Control
            placeholder='Parola'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Autentificare
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Nu ai cont?{' '}
          <Link
            to={redirect ? `/register?redirect=${redirect}` : '/register'}
            style={{ color: '#176e99' }}
          >
            Creeaza unul.
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
