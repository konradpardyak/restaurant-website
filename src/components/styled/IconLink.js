import styled from 'styled-components';

const IconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.main};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
  svg {
    fill: ${props =>
    props.color ? props.color
    :
    props.primary ? props.theme.colors.primary
    : 
    props.secondary ? props.theme.colors.secondary
    :
    props.theme.colors.main};
  }
  &:hover {
    background-color: ${props => props.light ? props.theme.colors.hoverLight : props.theme.colors.hover};
  }
  &:active {
    background-color: inherit;
  }
`

export default IconLink;
