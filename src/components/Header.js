import style from './Header.module.css';

const Header = () => {
  return(
    <header className={style.header}>
      <nav className={style.navbar}>
        <h1>Pizza Toscana</h1>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className={style.content}>
        <h3>Italian tradition</h3>
        <p>We deliver the best pizzas in town</p>
        <a href="#">ORDER NOW</a>
      </div>
    </header>
  )
}

export default Header;