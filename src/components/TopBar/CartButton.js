import { useState } from "react";
import styled from 'styled-components';
import CartIcon from '../icons/CartIcon';
import IconLink from '../styled/IconLink';

const ItemsInCart = styled.div`
  font-size: .8rem;
  font-weight: 700;
`

const CartButton = (props) => {
  const { onToggleChange } = props;
  const [itemsInCart, setItemsInCart] = useState(0);

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

export default CartButton;
