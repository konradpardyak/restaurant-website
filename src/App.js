import './App.css';
import Theme from './Theme';
import TopBar from './components/TopBar/TopBar';
import Header from './components/Header';
import About from './components/About';

const App = () => {
  return (
    <Theme>
      <TopBar />
      <Header />
      <About />
    </Theme>
  )
}

export default App;
