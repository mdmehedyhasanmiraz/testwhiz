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
          <img src="/testwhiz.svg" alt="testwhiz" width="120px" height="45px" />
        </NavbarBrand>
        <NavbarList>
          <NavbarItem><a href="https://test.oimi.co/#features">Features</a></NavbarItem>
          <NavbarItem><a href="https://test.oimi.co/#reviews">Reviews</a></NavbarItem>
          <NavbarItem><Link to='about'>About</Link></NavbarItem>
          <NavbarItem><a href="https://test.oimi.co/#faq">FAQ</a></NavbarItem>
        </NavbarList>
        <NavbarList>
          <SignedOut>
            <NavbarItem active={true}>
              <SignInButton></SignInButton>
            </NavbarItem>
          </SignedOut>
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
          <SignedOut>
            <NavbarItem active={true}>
              <SignInButton />
            </NavbarItem>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  )
}

export default Header