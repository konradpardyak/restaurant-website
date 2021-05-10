import styled from 'styled-components';

const Button = styled.a`
  font-size: ${props => props.big ? "1.4rem" : "1rem" };
  color: white;
  background: ${props => props.theme.gradients.main};
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.6);
  padding: ${props => props.big ? "0 3rem" : "0 2.5rem" };
  height: ${props => props.big ? "3rem" : "2.5rem" };
  line-height: ${props => props.big ? "3rem" : "2.5rem" };
  border-radius: ${props => props.big ? ".75rem" : ".5rem" };
  text-align: center;
  cursor: pointer;
  &:hover {
    color: #E6E6E6;
    background: ${props => props.theme.gradients.mainDark};
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,.6);
  }
`

export default Button;
