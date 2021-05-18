import styled from 'styled-components';
import Header from '../styled/Header';
import FoodMenuItem from './FoodMenuItem';

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

const FoodMenu = () => {
  return(
    <StyledFoodMenu>
      <Header>
        <h2>Food Menu</h2>
        <h3>Our Specials</h3>
      </Header>
      <FoodMenuList>
        <FoodMenuItem imgUrl="001.jpg" name="Margherita" price={19.99} desc="Loremipsum dolor sit amet." />
      </FoodMenuList>
    </StyledFoodMenu>
  )
}

export default FoodMenu;
