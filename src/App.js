import './App.css';
import Theme from './Theme';
import TopBar from './components/TopBar/TopBar';
import Home from './components/Home';
import About from './components/About';
import FoodMenu from './components/FoodMenu/FoodMenu';
import Contact from './components/Contact';

const App = () => {
  return (
    <Theme>
      <TopBar />
      <Home />
      <About />
      <FoodMenu />
      <Contact />
    </Theme>
  )
}

export default App;
