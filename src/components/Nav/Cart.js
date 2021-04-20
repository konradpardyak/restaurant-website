import style from './Cart.module.css';
import CartItem from './CartItem';
import BigButton from '../shared/BigButton';

const Cart = (props) => {
  const { onToggleChange } = props;

  const handleClick = () => {
    onToggleChange();
  }
  
  return (
    <>
      <div onClick={handleClick} className={style.shadow}></div>
      <div className={style.cartContent}>
        <div className={style.header}>
          <h3>YOUR CART</h3>
          <div onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
          </div>
        </div>
        <ul className={style.itemList}>
          <CartItem imgUrl="001.jpg" name="Margherita" price={19.99} />
        </ul>
        <div className={style.footer}>
          <div className={style.summary}>
            <h3>Total</h3>
            <h3>19.99 EUR</h3>
          </div>
          <BigButton href="#">CHECKOUT</BigButton>
        </div>
      </div>
    </>
  )
}

export default Cart;
