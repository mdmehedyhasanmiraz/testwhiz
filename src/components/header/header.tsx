import { Container, Image, NavDropdown, Navbar, Nav } from 'react-bootstrap'
import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/clerk-react'
import './header.css'

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="container-lg grid gap-5">
          <Navbar.Brand href="#home">
            <Image src="#" width={50} className=""/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://test.oimi.co/">Home</Nav.Link>
              <Nav.Link href="https://test.oimi.co/">All Products</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Coming Soon!</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Coming Soon!</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header