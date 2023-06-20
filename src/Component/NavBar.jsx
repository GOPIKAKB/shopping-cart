import React, { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { myConext } from '../App'
import { BsCartFill } from "react-icons/bs";

function NavBar() {
  const { cart } = useContext(myConext)
  let text = {
    textDecoration: 'none',
    color: 'white'
  }
  return (
    <div style={{ backgroundColor: 'black' }}>
      <Navbar variant="light" >
        <Container>
          <Navbar.Brand href="#home"><img src='https://ekartlogistics.com/assets/images/ekblueLogo.png' width={100} style={{ marginLeft: '20px' }}></img></Navbar.Brand>
          <Nav className="me-auto, justify-content-end">
            <Nav.Link><Link style={text} to='/'>Home</Link> </Nav.Link>
            <Nav.Link ><Link style={text} to='/cart'><BsCartFill /><sup>{cart.length === 0 ? '' : cart.length}</sup></Link>  </Nav.Link>
          </Nav>
        </Container>
        <button style={{ backgroundColor: 'blue', color: 'white', width: '100px', marginRight: '70px', borderRadius: '6px' }}><b>sign in</b></button>
      </Navbar>
    </div>
  )
}

export default NavBar
