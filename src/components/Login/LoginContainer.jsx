import { connect } from 'react-redux';
import { Login } from './Login';
import { loginn } from '../../redux/header-reducer';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const LoginContainer = connect(mapStateToProps, { loginn })(Login);

export { LoginContainer };
