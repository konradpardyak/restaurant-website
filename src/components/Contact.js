import styled, { css } from 'styled-components';
import Header from './styled/Header';

const StyledContact = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 1rem;
  @media (min-width: 600px) {
    min-height: calc(100vh - 60px);
  }
`
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 600px) {
    width: calc(600px - 2rem);
  }
`
const inputStyle = css`
  min-width: 0;
  border: 4px solid ${props => props.theme.colors.secondary};
  font-size: 1.4rem;
  line-height: 2.5rem;
  padding: 0 1.4rem;
  border-radius: 1.6rem;
  margin: 1rem;
  ::placeholder {
    color: ${props => props.theme.colors.secondary};
  }
  &:focus {
    border: 4px solid ${props => props.theme.colors.primary};
    outline: none;
    ::placeholder {
    color: ${props => props.theme.colors.primary};
    }
  }
`
const StyledInput = styled.input`
  ${inputStyle}
`
const StyledTextarea = styled.textarea`
  ${inputStyle}
  margin: 0 1rem 1rem 1rem;
`
const SubmitButton = styled.input`
  margin: 1rem;
  color: white;
  border: none;
  background: ${props => props.theme.gradients.main};
  padding: 0 2.5rem;
  height: 2.5rem;
  font-size: 1rem;
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
  &:focus {
    outline: 2px solid ${props => props.theme.colors.primary};
  }
`
const Group = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`

const Contact = () => {
  return(
    <StyledContact id="contact">
      <Header>
        <h2>Contact</h2>
        <h3>Send us a message</h3>
      </Header>
      <StyledForm>
        <Group>
          <StyledInput type="text" placeholder="First Name" />
          <StyledInput type="text" placeholder="Last Name" />
        </Group>
        <StyledInput type="email" placeholder="Email Addres" />
        ​<StyledTextarea id="textarea" placeholder="Message" rows="4" ></StyledTextarea>
        <div>
          <SubmitButton type="button" value="SEND" />
        </div>
      </StyledForm>
    </StyledContact>
  )
}

export default Contact;
