import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

const ShippingScreen = ({ history }) => {
  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart
  const dispatch = useDispatch()

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const submitHandler = e => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    history.push('/placeorder')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>Adresa</Form.Label>
          <Form.Control
            placeholder='Adresa'
            type='text'
            value={address}
            onChange={e => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>Oras</Form.Label>
          <Form.Control
            placeholder='Oras'
            type='text'
            value={city}
            onChange={e => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='postalCode'>
          <Form.Label>Cod Postal</Form.Label>
          <Form.Control
            placeholder='Cod Postal'
            type='text'
            value={postalCode}
            onChange={e => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='country'>
          <Form.Label>Tara</Form.Label>
          <Form.Control
            placeholder='Tara'
            type='text'
            value={country}
            onChange={e => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' style={{ float: 'right' }}>
          Continua
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
