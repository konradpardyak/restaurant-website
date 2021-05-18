import './App.css';
import Theme from './Theme';
import TopBar from './components/TopBar/TopBar';
import Header from './components/Header';
import About from './components/About';
import FoodMenu from './components/FoodMenu/FoodMenu';

const App = () => {
  return (
    <Theme>
      <TopBar />
      <Header />
      <About />
      <FoodMenu />
    </Theme>
  )
}

export default App;
