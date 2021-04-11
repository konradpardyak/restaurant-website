import style from './Navbar.module.css';

const Navbar = () => {
  return(
    <nav className={style.navbar}>
        <h1>Pizza Toscana</h1>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
  )
}

export default Navbar;