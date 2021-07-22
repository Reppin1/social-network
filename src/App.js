import './App.css';
import { Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { Profile } from './components/Profile/Profile';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';

const App = ({ store }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="app-wrapper">
    <Header />
    <Nav store={store} />
    <div className="app-wrapper-content">
      <Route path="/dialogs" render={() => <DialogsContainer store={store} />} />
      <Route path="/profile" render={() => <Profile store={store} />} />
      <Route path="/news" render={() => <News />} />
      <Route path="/music" render={() => <Music />} />
      <Route path="/settings" render={() => <Settings />} />
    </div>
  </div>
);
export { App };
