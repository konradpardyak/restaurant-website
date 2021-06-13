import styled from 'styled-components';
import Button from '../styled/Button';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Shop/shopActions';

const StyledFoodMenuItem = styled.li`
  width: 100%;
  height: 400px;
  h4 {
    font-size: 1.2rem;
  }
  h5 {
    font-size: 1rem;
  }
  h4, h5, p {
    margin: .5rem 0;
  }
`
const Image = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 1rem;
  background-size: cover;
  background-position: center;
  margin: auto;
`

const FoodMenuItem = ({ id, imgUrl, name, price, desc, addToCart }) => {

  const image = require(`../../assets/${imgUrl}`);

  return(
    <StyledFoodMenuItem>
      <Image style={{backgroundImage: `url(${image.default})`}}></Image>
        <h4>{name}</h4>
        <p>{desc}</p>
        <h5>{price} EUR</h5>
        <Button onClick={() => addToCart(id)}>ADD TO CART</Button>
    </StyledFoodMenuItem>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  }
}

export default connect(null, mapDispatchToProps)(FoodMenuItem);
