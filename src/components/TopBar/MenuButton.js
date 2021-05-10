import styled from 'styled-components';
import IconLink from '../styled/IconLink';
import MenuIcon from '../icons/MenuIcon';
import CloseIcon from '../icons/CloseIcon';

const StyledMenuButton = styled(IconLink)`
  @media (min-width: 600px) {
    display: none;
  }
`

const MenuButton = ({ onToggleChange, isOpen }) => {

  const handleClick = () => {
    onToggleChange();
  }
  
  return(
    <StyledMenuButton onClick={handleClick}>
      { isOpen ? <CloseIcon /> : <MenuIcon /> }
    </StyledMenuButton>
  )
}

export default MenuButton;
