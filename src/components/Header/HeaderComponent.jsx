import React from 'react';
import { connect } from 'react-redux';
import { Header } from './Header';
import { setAuthUserData, setUserInfo } from '../../redux/header-reducer';
import { usersAPI } from '../../api/api';

class HeaderComponent extends React.Component {
  componentDidMount() {
    usersAPI.auth().then((data) => {
      if (data.resultCode === 0) {
        this.props.setAuthUserData(data.data);
        const ID = data.data.id;
        usersAPI.getOneUser(ID).then((responses) => {
          this.props.setUserInfo(responses.data);
        });
      }
    });
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
  setAuthUserData,
  setUserInfo,
})(HeaderComponent);

export { HeaderComponentAC };
