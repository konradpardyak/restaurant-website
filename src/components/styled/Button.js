import styled, { css } from 'styled-components';
import { Link as LinkScroll } from "react-scroll";

const buttonStyle = css`
  display: inline-block;
  color: white;
  background: ${props => props.theme.gradients.main};
  padding: 0 2.5rem;
  height: 2.5rem;
  border: none;
  font-family: inherit;
  font-size: 1rem;
  text-transform: uppercase;
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
  &:focus-visible {
    outline: 3px solid ${props => props.theme.colors.primary};
  }
`
const Button = styled.button`
  ${buttonStyle}
`
export const ScrollButton = styled(LinkScroll)`
  ${buttonStyle}
`

export default Button;
