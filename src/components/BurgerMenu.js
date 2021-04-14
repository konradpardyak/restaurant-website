import { useState } from 'react';
import style from './BurgerMenu.module.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen( !isOpen);
  }
  return(
    <div className={style.burgerMenu}>
      <div className={style.burgerIcon} onClick={toggle}>
        { isOpen ?
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
          }
      </div>
      { isOpen ? 
        <div className={style.menu}>
          <ul>
            <li><a onClick={toggle} href="#">HOME</a></li>
            <li><a onClick={toggle} href="#">ABOUT</a></li>
            <li><a onClick={toggle} href="#">MENU</a></li>
            <li><a onClick={toggle} href="#">CONTACT</a></li>
          </ul>
        </div>
        :
        null
      }
    </div>
  )
}

export default BurgerMenu;