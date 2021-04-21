import { useState } from 'react';
import MenuButton from './MenuButton';
import Menu from './Menu';
import CartButton from './CartButton';
import Cart from "./Cart";
import style from './Navbar.module.css';

const Navbar = () => {
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
    <nav className={style.navbar}>
      <h1>Pizza Toscana</h1>
      <div className={style.navbarMenuGroup}>
        <ul className={style.navbarMenu}>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">MENU</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
        <CartButton onToggleChange={handleCartToggleChange} />
        {cartToggleState &&
          <Cart onToggleChange={handleCartToggleChange} />
        }
        <MenuButton onToggleChange={handleMenuToggleChange} isOpen={menuToggleState} />
        {menuToggleState &&
          <Menu onToggleChange={handleMenuToggleChange} />
        }
      </div>
    </nav>
  )
}

export default Navbar;
