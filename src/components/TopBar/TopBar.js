import { useState } from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton';
import Menu from './Menu';
import CartButton from './CartButton';
import Cart from "./Cart";
import Link from '../styled/Link';

const StyledTopBar = styled.div`
  top: 0;
  width: 100%;
  height: 60px;
  padding: 0 .5rem;
  z-index: 200;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: ${props => props.theme.gradients.main};
  user-select: none;
  @media (min-width: 600px) {
    padding: 0 2rem;
  }
`
const Logo = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 1.6rem;
  line-height: 59px;
  color: ${props => props.theme.colors.mainDark};
`
const NavGroup = styled.div`
  display: flex;
  align-items: center;
`
const NavBar = styled.nav`
  display: none;
  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const TopBar = () => {
  const [menuToggleState, setMenuToggleState] = useState(false);
  const [cartToggleState, setCartToggleState] = useState(false);

  const handleCartToggleChange = () => {
    setCartToggleState(!cartToggleState);
    setMenuToggleState(false);
  }

  const handleMenuToggleChange = () => {
    setMenuToggleState(!menuToggleState);
  }

  return(
    <StyledTopBar>
      <Logo>Pizza Toscana</Logo>
      <NavGroup>
        <NavBar>
          <Link href="#">HOME</Link>
          <Link href="#">ABOUT</Link>
          <Link href="#">MENU</Link>
          <Link href="#">CONTACT</Link>
        </NavBar>
        <CartButton onToggleChange={handleCartToggleChange} />
        <Cart onToggleChange={handleCartToggleChange} isOpen={cartToggleState} />
        <MenuButton onToggleChange={handleMenuToggleChange} isOpen={menuToggleState} />
        <Menu onToggleChange={handleMenuToggleChange} isOpen={menuToggleState} />
      </NavGroup>
    </StyledTopBar>
  )
}

export default TopBar;
