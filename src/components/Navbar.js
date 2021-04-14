import BurgerMenu from './BurgerMenu';
import Cart from './Cart';
import style from './Navbar.module.css';

const Navbar = () => {
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
        <Cart />
        <BurgerMenu />
      </div>
    </nav>
  )
}

export default Navbar;