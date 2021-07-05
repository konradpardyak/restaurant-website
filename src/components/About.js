import styled from 'styled-components';
import Button from './styled/Button';
import Header from './styled/Header';

const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 600px) {
    min-height: calc(100vh - 60px);
    padding: 1rem 1rem;
    flex-direction: row-reverse;
    justify-content: center;
  }
`
const Image = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: bottom;
  position: relative;
  @media (min-width: 600px) {
    width: 40vw;
    height: 40vw;
    border-radius: 5%;
  }
  @media (min-width: 1000px) {
    width: 400px;
    height: 400px;
    &:after {
      width: 400px;
      height: 400px;
      border-radius: 5%;
      display: block;
      position: absolute;
      content: "";
      top: 1.5rem;
      left: -1.5rem;
      z-index: -1;
      background: ${props => props.theme.gradients.main};
    }
  }
`
const Description = styled.div`
  padding: 1rem;
  text-align: center;
  @media (min-width: 600px) {
    width: 400px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    padding: 0 0 0 1rem;
  }
  @media (min-width: 1000px) {
    width: 560px;
    padding: 1rem 1rem 1rem 5rem;
    justify-content: space-between;
  }
  p {
    padding-bottom: 2rem;
  }
`

const About = () => {

  const restaurantImage = require(`../assets/restaurant-background.jpg`);

  return(
    <StyledAbout id="about">
      <Description>
        <Header>
          <h2>About Us</h2>
          <h3>Restaurant</h3>
        </Header>
        <p>
          Loremipsum dolor sit amet, consectetur adipiscing elit. Donec non tincidunt est. Proin nulla ante, porta ac porttitor sit amet, sollicitudin venenatis nunc. In ac iaculis arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque tincidunt nisi quis dui ultricies, non tincidunt ipsum venenatis.
        </p>
        <Button href="#">BOOK A TABLE</Button>
      </Description>
      <Image style={{backgroundImage: `url(${restaurantImage.default})`}}></Image>
    </StyledAbout>
  )
}

export default About;
