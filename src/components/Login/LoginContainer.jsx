import { connect } from 'react-redux';
import React from 'react';
import { Login } from './Login';
import { getCaptcha, loginn } from '../../redux/header-reducer';

class LoginContainerAPI extends React.Component {
  componentDidMount() {
    this.props.getCaptcha();
  }

  render() {
    return (
      <Login {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  urlCaptcha: state.auth.urlCaptcha,
});

const LoginContainer = connect(mapStateToProps, { loginn, getCaptcha })(LoginContainerAPI);

export { LoginContainer };
