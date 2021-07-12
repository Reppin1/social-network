import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Profile } from './components/Profile/Profile';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';

const App = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Route path="/dialogs" component={Dialogs} />
        <Route path="/profile" component={Profile} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
