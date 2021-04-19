import style from './Menu.module.css';

const Menu = (props) => {
  const { onToggleChange } = props;

  const handleClick = () => {
    onToggleChange();
  }

  return (
    <div className={style.menuWrapper}>
      <div className={style.menu}>
        <ul>
          <li><a onClick={handleClick} href="#">HOME</a></li>
          <li><a onClick={handleClick} href="#">ABOUT</a></li>
          <li><a onClick={handleClick} href="#">MENU</a></li>
          <li><a onClick={handleClick} href="#">CONTACT</a></li>
        </ul>
      </div>
      <div onClick={handleClick} className={style.shadow}></div>
    </div>
  )
}

export default Menu;