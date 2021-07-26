import styled from 'styled-components';
import Button from './styled/Button';
import Header from './styled/Header';

const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 1rem 0;
  @media (min-width: 600px) {
    min-height: calc(100vh - 60px);
  }
`
const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  @media (min-width: 1000px) {
    flex-direction: row;
    padding: 0;
  }
`
const Image = styled.div`
  width: 75vw;
  height: 50vw;
  background-size: cover;
  background-position: center;
  position: relative;
  @media (min-width: 600px) {
    width: 450px;
    height: 300px;
  }
  @media (min-width: 1000px) {
    width: 450px;
    height: 300px;
    margin-left: 50px;
  }
  @media (min-width: 1400px) {
    width: 525px;
    height: 350px;
    margin-left: 0;
  }
`
const Description = styled.div`
  padding: 1rem;
  text-align: center;
  @media (min-width: 600px) {
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    padding: 1rem 0;
  }
  @media (min-width: 1000px) {
    width: 500px;
    height: 300px;
    padding: 0 2rem;
  }
  @media (min-width: 1400px) {
    width: 525px;
    height: 350px;
  }
`
const Quotes = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.6rem;
  border-left: 5px solid ${props => props.theme.colors.primary};
  padding-left: .5rem;
`
const Tyopgraphy = styled.p`
  padding-bottom: 2rem;
  padding-top: 2rem;
`

const About = () => {

  const restaurantImage = require(`../assets/restaurant-background.jpg`);

  return(
    <StyledAbout id="about">
      <Header>
        <h2>About Us</h2>
        <h3>Explore our restaurant</h3>
      </Header>
      <Content>
        <Image style={{backgroundImage: `url(${restaurantImage.default})`}}></Image>
        <Description>
          <Quotes>
            ''Food is symbolic of love when words are inadequate.''
          </Quotes>
          <Tyopgraphy>
            Loremipsum dolor sit amet, consectetur adipiscing elit. Donec non tincidunt est. Proin nulla ante, porta ac porttitor sit amet, sollicitudin venenatis nunc. In ac iaculis arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque tincidunt nisi quis dui ultricies, non tincidunt ipsum venenatis.
          </Tyopgraphy>
          <Button href="#">BOOK A TABLE</Button>
        </Description>
      </Content>
    </StyledAbout>
  )
}

export default About;
