import styled from 'styled-components';
import IconLink from '../styled/IconLink';
import DeleteIcon from '../icons/DeleteIcon';
import AddIcon from '../icons/AddIcon';
import SubstractIcon from '../icons/SubstractIcon';

const StyledCartItem = styled.li`
  width: 100%;
  padding: 1rem .5rem 1rem 1rem;
  display: flex;
  color: #fff;
`
const Top = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    padding-left: .75rem;
  }
`
const Image = styled.div`
  width: 5rem;
  height: 5rem;
  background-size: cover;
  background-position: center;
  border-radius: 15%;
`
const Content = styled.div`
  flex-grow: 1;
  padding-left: .2rem;
`
const Quantity = styled.div`
  width: 7.5rem;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Price = styled.p`
  opacity: .5;
`

const CartItem = ({ imgUrl, name, price }) => {

  const image = require(`../../assets/${imgUrl}`);

  return (
    <StyledCartItem>
      <Image style={{backgroundImage: `url(${image.default})`}}></Image>
      <Content>
        <Top>
          <div>
            <p>{name}</p>
            <Price>{price} EUR</Price>
          </div>
          <IconLink color="#fff" light>
            <DeleteIcon />
          </IconLink>
        </Top>
        <Quantity>
            <IconLink color="#fff" light>
              <SubstractIcon />
            </IconLink>
            1
            <IconLink color="#fff" light>
              <AddIcon />
            </IconLink>
          </Quantity>
      </Content>
    </StyledCartItem>
  )
}

export default CartItem;
