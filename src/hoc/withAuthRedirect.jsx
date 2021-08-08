import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
  // eslint-disable-next-line react/prefer-stateless-function
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to="login" />;
      return <Component {...this.props} />;
    }
  }
  return connect(mapStateToPropsForRedirect)(RedirectComponent);
};
