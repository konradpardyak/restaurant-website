import styled from 'styled-components';
import { Link as LinkScroll } from "react-scroll";

const Button = styled(LinkScroll)`
  display: inline-block;
  color: white;
  background: ${props => props.theme.gradients.main};
  padding: 0 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  border-radius: 3rem;
  text-align: center;
  cursor: pointer;
  user-select: none;
  &:hover {
    background: ${props => props.theme.colors.primary};
  }
  &:active {
    background: ${props => props.theme.gradients.main};
  }
`

export default Button;
