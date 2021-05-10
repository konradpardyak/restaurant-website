import styled from 'styled-components';

const Link = styled.a`
  font-size: .8rem;
  font-weight: 700;
  color: ${props => props.primary ? props.theme.colors.primary : props.theme.colors.main};
  padding: 0 1rem;
  height: 1.8rem;
  line-height: 1.8rem;
  border-radius: .4rem;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.hover};
  }
`

export default Link;
