import styled from 'styled-components';
import CartIcon from '../icons/CartIcon';
import IconLink from '../styled/IconLink';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const ItemsInCart = styled.div`
  font-size: .8rem;
  font-weight: 700;
`

const CartButton = ({ onToggleChange, cart }) => {
  const [itemsInCart, setItemsInCart] = useState(0);

  useEffect(() => {
    let countItems = 0;
    cart.forEach((item) => {
      countItems += item.qty;
    });
    setItemsInCart(countItems);
  }, [cart]);

  const handleClick = () => {
    onToggleChange();
  }
  
  return(
    <IconLink onClick={handleClick}>
      <CartIcon />
      <ItemsInCart>{itemsInCart}</ItemsInCart>
    </IconLink>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(CartButton);
