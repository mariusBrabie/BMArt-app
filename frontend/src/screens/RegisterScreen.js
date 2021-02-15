import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { register } from '../actions/userActions'
import FormContainer from '../components/FormContainer'

const RegisterScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector(state => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const onSubmitHandler = e => {
    e.preventDefault()

    if (!name || !email || !password || !confirmPassword) {
      setMessage('Toate campurile sunt obligatorii!')
    } else {
      setMessage(null)
      if (password !== confirmPassword) {
        setMessage('Parola nu este confirmata!')
      } else {
        dispatch(register(name, email, password))
        setMessage(null)
      }
    }
  }

  return (
    <FormContainer>
      <p className='pt-5'></p>
      {message && <Message variant='danger'>{message}</Message>}
      {error && !message && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={onSubmitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Nume</Form.Label>
          <Form.Control
            placeholder='Nume'
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

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

        <Form.Group controlId='confirm-password'>
          <Form.Label>Confirma Parola</Form.Label>
          <Form.Control
            placeholder='Confirma Parola'
            type='password'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Inregistrare
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Ai deja cont?{' '}
          <Link
            to={redirect ? `/login?redirect=${redirect}` : '/login'}
            style={{ color: '#176e99' }}
          >
            Log in.
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
