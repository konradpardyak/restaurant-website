import style from './MenuButton.module.css';

const MenuButton = (props) => {
  const { onToggleChange, isOpen } = props;

  const handleClick = () => {
    onToggleChange();
  }
  
  return(
    <div className={style.menuButton}>
      <div className={style.burgerIcon} onClick={handleClick}>
        { isOpen ?
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
          }
      </div>
    </div>
  )
}

export default MenuButton;
