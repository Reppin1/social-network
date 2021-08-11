import './App.css';
import { Route, withRouter } from 'react-router-dom';
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Nav } from './components/Nav/Nav';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import { ProfileContainer } from './components/Profile/ProfileContainer';
import { HeaderComponentAC } from './components/Header/HeaderComponent';
import { LoginContainer } from './components/Login/LoginContainer';
import { inicializeApp } from './redux/app-reducer';
import { Preloader } from './components/common/Preloader/Preloader';

class AppContainer extends React.Component {
  componentDidMount() {
    this.props.inicializeApp();
  }

  render() {
    if (!this.props.inicialized) {
      // eslint-disable-next-line react/jsx-filename-extension
      return <Preloader />;
    }
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="app-wrapper">
        <HeaderComponentAC />
        <Nav {...this.props.sidebars} />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginContainer />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  inicialized: state.app.inicialized,
  sidebars: state.sidebars,
});

const App = compose(
  withRouter,
  connect(mapStateToProps, { inicializeApp }),
)(AppContainer);

export { App };
