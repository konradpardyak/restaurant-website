import './App.css';
import Theme from './Theme';
import TopBar from './components/TopBar/TopBar';
import Header from './components/Header';
import About from './components/About';
import FoodMenu from './components/FoodMenu/FoodMenu';
import Contact from './components/Contact';

const App = () => {
  return (
    <Theme>
      <TopBar />
      <Header />
      <About />
      <FoodMenu />
      <Contact />
    </Theme>
  )
}

export default App;
