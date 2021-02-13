import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3 }) => {
  return (
    <Nav className='justify-content-center m-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link variant='primary'>Conectare</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Conectare</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link>Livrare</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Livrare</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link>Plaseaza comanda</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Plaseaza comanda</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
