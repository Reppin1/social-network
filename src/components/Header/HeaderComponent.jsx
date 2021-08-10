import React from 'react';
import { connect } from 'react-redux';
import { Header } from './Header';
import { getAuthUsersData, logout } from '../../redux/header-reducer';

class HeaderComponent extends React.Component {
  componentDidMount() {
    this.props.getAuthUsersData();
  }

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
  getAuthUsersData,
  logout,
})(HeaderComponent);

export { HeaderComponentAC };
