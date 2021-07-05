import styled from 'styled-components';
import Link from '../styled/Link';

const Content = styled.nav`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 60vh;
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.theme.colors.main};
  transition: transform 0.3s ease-in-out;
  transform-origin: top;
  transform: ${({ isOpen }) => isOpen ? 'scaleY(1)' : ' scaleY(0)'};
`
const MenuLink = styled(Link)`
  color: ${props => props.theme.colors.secondary};
  font-size: 1rem;
  padding: 0 2rem;
  height: 2.5rem;
  line-height: 2.5rem;
  &:hover {
    background-color: ${props => props.theme.colors.hoverLight};
  }
`
const Shadow = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: rgba(20, 20, 20, .3);
  display: ${({ isOpen }) => isOpen ? "block" : "none"};
`

const Menu = ({ isOpen, onToggleChange }) => {

  const handleClick = () => {
    onToggleChange();
  }

  return (
    <>
      <Content isOpen={isOpen}>
          <MenuLink onClick={handleClick} to="home" smooth={true} offset={-60} duration={500}>HOME</MenuLink>
          <MenuLink onClick={handleClick} to="about" smooth={true} offset={-60} duration={500}>ABOUT</MenuLink>
          <MenuLink onClick={handleClick} to="menu" smooth={true} offset={-60} duration={500}>MENU</MenuLink>
          <MenuLink onClick={handleClick} to="contact" smooth={true} offset={-60} duration={500}>CONTACT</MenuLink>
      </Content>
      <Shadow isOpen={isOpen} onClick={handleClick}></Shadow>
    </>
  )
}

export default Menu;
