import './App.css';
import Theme from "./Theme";
import Header from './components/Header';
import TopBar from './components/TopBar/TopBar';

const App = () => {
  return (
    <Theme>
      <TopBar />
      <Header />
    </Theme>
  )
}

export default App;
