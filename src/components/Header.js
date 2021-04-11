import style from './Header.module.css';

const Header = () => {
  return(
    <header className={style.header}>
      <div>
        <h3>Italian tradition</h3>
        <p>We deliver the best pizzas in town</p>
      </div>
      <a href="#">ORDER NOW</a>
    </header>
  )
}

export default Header;