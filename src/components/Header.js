import style from './Header.module.css';
import BigButton from './shared/BigButton';

const Header = () => {
  return(
    <header className={style.header}>
      <div>
        <h3>Italian tradition</h3>
        <p>We deliver the best pizzas in town</p>
      </div>
      <BigButton href="#" >ORDER NOW</BigButton>
    </header>
  )
}

export default Header;