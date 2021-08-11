import React from 'react';
import { connect } from 'react-redux';
import { Header } from './Header';
import { logout } from '../../redux/header-reducer';

// eslint-disable-next-line react/prefer-stateless-function
class HeaderComponent extends React.Component {
  render() {
    return (
      <Header {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  info: state.auth.info,
});

const HeaderComponentAC = connect(mapStateToProps, {
  logout,
})(HeaderComponent);

export { HeaderComponentAC };
