import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { getMyOrders } from '../actions/orderActions'

const ProfileScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  //const [updateMessage, setUpdateMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector(state => state.userDetails)
  const { loading, error, user } = userDetails

  const userLoginLogout = useSelector(state => state.userLoginLogout)
  const { userInfo } = userLoginLogout

  const orderList = useSelector(state => state.orderList)
  const { loading: loadingOrders, error: errorOrders, myOrders } = orderList

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      dispatch(getMyOrders())
      if (!user.name) {
        dispatch(getUserDetails())
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, history, userInfo, user.name, user.email])

  const onSubmitHandler = e => {
    if (
      password &&
      !password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}/)
    ) {
      e.preventDefault()
      setMessage(
        'Parola trebuie sa aiba minim 8 caractere, sa contina cel putin o litera mica, o litera mare si o cifra!'
      )
    } else {
      if (password !== confirmPassword) {
        e.preventDefault()
        setMessage('Parola nu este confirmata')
      } else {
        // setPassword('')
        // setConfirmPassword('')
        setMessage(null)
        dispatch(
          updateUserProfile({
            id: user._id,
            name,
            email,
            password
          })
        )
        //setUpdateMessage('Profilul a fost updatat!')
        //setTimeout(() => setUpdateMessage(null), 3500)
      }
    }
  }

  return (
    <Row>
      <Col md={3}>
        <h4 className='pt-5'>Profil</h4>
        {message && <Message variant='danger'>{message}</Message>}
        {error && !message && <Message variant='danger'>{error}</Message>}
        {
          //   updateMessage && !error && (
          //   <Message variant='success'>{updateMessage}</Message>
          // )
        }
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
            Modifica
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        {myOrders.length > 0 && <h4 className='pt-5 mb-3'>Comenzile mele</h4>}
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant='danger'>{errorOrders}</Message>
        ) : (
          <>
            {myOrders.length > 0 && (
              <Table
                bordered
                striped
                responsive
                className='table-sm text-center mt-0'
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>DATA</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {myOrders.map(item => (
                    <tr key={item._id}>
                      <td>{item._id}</td>
                      <td>{item.createdAt.substring(0, 10)}</td>
                      <td>{item.totalPrice}</td>
                      <td>
                        <LinkContainer to={`/orders/${item._id}`}>
                          <Button variant='secondary' className='btn-block'>
                            Detalii
                          </Button>
                        </LinkContainer>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </>
        )}
      </Col>
    </Row>
  )
}

export default ProfileScreen
