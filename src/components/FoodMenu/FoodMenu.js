import styled from 'styled-components';
import Header from '../styled/Header';
import FoodMenuItem from './FoodMenuItem';
import { connect } from "react-redux";

const StyledFoodMenu = styled.section`
  background-color: #f4f4f4;
  text-align: center;
  padding: 1rem;
`
const FoodMenuList = styled.ul`
  max-width: 1000px;
  margin: auto;
  margin-top: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`

const FoodMenu = ({ products }) => {
  return(
    <StyledFoodMenu id="menu">
      <Header>
        <h2>Food Menu</h2>
        <h3>Our Specials</h3>
      </Header>
      <FoodMenuList>
        {products.map(({id, imgUrl, name, price, desc}) => (
          <FoodMenuItem key={id} id={id} imgUrl={imgUrl} name={name} price={price} desc={desc} />
        ))}
      </FoodMenuList>
    </StyledFoodMenu>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products
  }
}

export default connect(mapStateToProps)(FoodMenu);
