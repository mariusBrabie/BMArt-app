import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Route } from 'react-router-dom'
import { FaFacebookF, FaShoppingCart, FaUserAlt } from 'react-icons/fa'
import { ImYoutube, ImPhone } from 'react-icons/im'
import { RiInstagramFill } from 'react-icons/ri'
import { useSelector, useDispatch } from 'react-redux'
import { NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'
import SearchBox from './SearchBox'

const Header = () => {
  const dispatch = useDispatch()
  const userLoginLogout = useSelector(state => state.userLoginLogout)
  const { userInfo } = userLoginLogout

  const userDetails = useSelector(state => state.userDetails)
  const { user } = userDetails

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar className='contact-nav bg-light'>
        <Navbar.Text>
          <ImPhone />
          {'0700112233'}
        </Navbar.Text>
        <span className='social'>
          <a href='https://www.facebook.com' rel='noreferrer' target='_blank'>
            <FaFacebookF className='social-icon' />
          </a>
          <a href='https://www.instagram.com' rel='noreferrer' target='_blank'>
            <RiInstagramFill className='social-icon' />
          </a>
          <a href='https://www.youtube.com' rel='noreferrer' target='_blank'>
            <ImYoutube className='social-icon' />
          </a>
        </span>
      </Navbar>
      <Navbar bg='primary' variant='secondary' id='sticky-bar'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <strong>BMArt</strong>
            </Navbar.Brand>
          </LinkContainer>
          <Nav className='mr-auto'>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <FaShoppingCart /> Cosul meu
              </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown title={user.name || userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profil</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link>
                  <FaUserAlt /> Contul meu
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
          <Route render={({ history }) => <SearchBox history={history} />} />
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
