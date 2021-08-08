import './App.css';
import { Route } from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import { ProfileContainer } from './components/Profile/ProfileContainer';
import { HeaderComponentAC } from './components/Header/HeaderComponent';
import { Login } from './components/Login/Login';

const App = ({ state }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="app-wrapper">
    <HeaderComponentAC />
    <Nav store={state} />
    <div className="app-wrapper-content">
      <Route path="/dialogs" render={() => <DialogsContainer />} />
      <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
      <Route path="/news" render={() => <News />} />
      <Route path="/music" render={() => <Music />} />
      <Route path="/settings" render={() => <Settings />} />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route path="/login" render={() => <Login />} />
    </div>
  </div>
);
export { App };
