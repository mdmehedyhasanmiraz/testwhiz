import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from 'keep-react'

const Header = () => {
  return (
    <Navbar className='z-50 fixed top-0 left-0 right-0 bg-background/60 backdrop-blur-xl transition-all bg-transparent'>
      <NavbarContainer>
        <NavbarBrand>
          <img src="/src/assets/testwhiz.png" alt="testwhiz" width="120" height="45" />
        </NavbarBrand>
        <NavbarList>
          <NavbarItem><Link to="/#features">Features</Link></NavbarItem>
          <NavbarItem><Link to="/#reviews">Reviews</Link></NavbarItem>
          <NavbarItem><Link to='/about'>About</Link></NavbarItem>
          <NavbarItem><Link to="/#faq">FAQ</Link></NavbarItem>
        </NavbarList>
        <NavbarList>
          <NavbarItem active={true}>
            <SignedOut>
              <SignInButton></SignInButton>
            </SignedOut>
          </NavbarItem>
          <SignedIn>
            <UserButton></UserButton>
          </SignedIn>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          <NavbarItem><Link to="/#features">Features</Link></NavbarItem>
          <NavbarItem><Link to="/#reviews">Reviews</Link></NavbarItem>
          <NavbarItem><Link to='/about'>About</Link></NavbarItem>
          <NavbarItem><Link to="/#faq">FAQ</Link></NavbarItem>
          <NavbarItem active={true}>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </NavbarItem>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  )
}

export default Header