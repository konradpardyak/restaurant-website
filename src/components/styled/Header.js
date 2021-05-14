import styled from 'styled-components';

const Header = styled.div`
  h2 {
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${props => props.theme.colors.secondary};
  }
  h3 {
    font-size: 2rem;
    font-family: 'Pacifico', 'cursive';
    color: ${props => props.theme.colors.primary};
  }
`

export default Header;
