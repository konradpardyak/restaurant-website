import styled from 'styled-components';

const Button = styled.a`
  display: inline-block;
  color: white;
  background: ${props => props.theme.gradients.main};
  padding: 0 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  border-radius: 3rem;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.main};
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,.5);
  }
`

export default Button;
