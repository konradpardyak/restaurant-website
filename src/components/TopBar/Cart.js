import styled from 'styled-components';
import CartItem from './CartItem';
import Button from '../styled/Button';
import IconLink from '../styled/IconLink';
import CloseIcon from '../icons/CloseIcon';
import { connect } from 'react-redux';

const Content = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 100;
  top: 0;
  right: 0;
  width: 85%;
  height: 100vh;
  background-color: ${props => props.theme.colors.main};
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  @media (min-width: 600px) {
    width: 480px;
  }
`
const Shadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(20, 20, 20, .3);
  display: ${({ isOpen }) => isOpen ? "block" : "none"};
`
const Header = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 0 .5rem 0 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, .1);
  h3 {
  color: white;
  font-size: 1rem;
  line-height: 60px;
}
`
const ItemList = styled.ul`
  flex-grow: 1;
  overflow-x: hidden;
`
const Footer = styled.div`
  width: 100%;
  padding: 1rem 1rem;
  border-top: 1px solid rgba(255, 255, 255, .1);
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 100%;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
  }
  h3 {
    color: white;
    font-size: 1rem;
  }
`

const Cart = ({ isOpen, onToggleChange, cart }) => {

  const handleClick = () => {
    onToggleChange();
  }
  
  return (
    <>
      <Shadow isOpen={isOpen} onClick={handleClick}></Shadow>
      <Content isOpen={isOpen}>
        <Header>
          <h3>CART</h3>
          <IconLink color="#fff" light onClick={handleClick}>
          <CloseIcon />
          </IconLink>
        </Header>
        <ItemList>
          {cart.map(({id, imgUrl, name, price, desc, qty}) => (
            <CartItem key={id} id={id} imgUrl={imgUrl} name={name} price={price} desc={desc} qty={qty}/>
          ))}
        </ItemList>
        <Footer>
          <div>
            <h3>Total</h3>
            <h3>
              {(cart.reduce((total, item) => ( item.price * 100 * item.qty + total ), 0) / 100).toFixed(2)} EUR
            </h3>
          </div>
          <Button href="#">CHECKOUT</Button>
        </Footer>
      </Content>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Cart);
