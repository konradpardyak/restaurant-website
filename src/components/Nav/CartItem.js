import style from './CartItem.module.css';

const CartItem = (props) => {
  const { imgUrl, name, price } = props;
  const image = require(`../../assets/${imgUrl}`);
  return (
    <li className={style.cartItem}>
      <div style={{backgroundImage: `url(${image.default})`}} className={style.img}></div>
      <div className={style.group}>
        <div className={style.info}>
          <div>{name}</div>
          <div className={style.price}>{price} EUR</div>
        </div>
        <div className={style.quantity}>
          <div className={style.substract}>-</div>
          1
          <div className={style.add}>+</div>
        </div>
      </div>
      <div className={style.delete}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
      </div>
    </li>
  )
}

export default CartItem;
