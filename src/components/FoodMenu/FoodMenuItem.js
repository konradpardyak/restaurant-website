import styled from 'styled-components';
import Button from '../styled/Button';

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

const FoodMenuItem = ({ imgUrl, name, price, desc }) => {

  const image = require(`../../assets/${imgUrl}`);

  return(
    <StyledFoodMenuItem>
      <Image style={{backgroundImage: `url(${image.default})`}}></Image>
        <h4>{name}</h4>
        <p>{desc}</p>
        <h5>{price} EUR</h5>
        <Button>ADD TO CART</Button>
    </StyledFoodMenuItem>
  )
}

export default FoodMenuItem;