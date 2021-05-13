import styled from 'styled-components';
import Button from './styled/Button';
import headerBackground from '../assets/header-background.jpg';

const StyledHeader = styled.header`
  width: 100%;;
  height: calc(100vh - 60px);
  margin-top: 60px;
  padding: 0 1rem 60px 1rem;
  background: linear-gradient(180deg, rgb(0, 0, 0, 0.4), rgba(0,0,0, 0.4)), url(${headerBackground});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  user-select: none;
  h1 {
    font-family: 'Pacifico', cursive;
    font-size: 2.5rem;
    color: ${props => props.theme.colors.primary};
    @media (min-width: 600px) {
      font-size: 3.5rem;
    }
    @media (min-width: 1024px) {
      font-size: 5rem;
    }
    @media (min-width: 1600px) {
      font-size: 7rem;
    }
  }
  p {
    font-size: 2rem;
    margin-bottom: 3rem;
    color: ${props => props.theme.colors.secondary};
    @media (min-width: 600px) {
      font-size: 2.5rem;
    }
    @media (min-width: 1024px) {
      font-size: 3.5rem;
    }
    @media (min-width: 1600px) {
      font-size: 4rem;
    }
  }
`

const Header = () => {
  return(
    <StyledHeader>
      <h1>Italian tradition</h1>
      <p>We deliver the best pizzas in town</p>
      <Button href="#" >Order Now</Button>
    </StyledHeader>
  )
}

export default Header;
