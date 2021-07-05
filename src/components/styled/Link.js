import styled from 'styled-components';
import { Link as LinkScroll } from "react-scroll";

const Link = styled(LinkScroll)`
  font-size: 1rem;
  font-weight: 700;
  color: ${props => props.primary ? props.theme.colors.primary : props.theme.colors.main};
  padding: 0 1rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: .4rem;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.hover};
  }
`

export default Link;
