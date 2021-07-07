import './App.css';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Profile } from './components/Profile';

const App = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="app-wrapper">
    <Header />
    <Nav />
    <Profile />
  </div>
);

export default App;
