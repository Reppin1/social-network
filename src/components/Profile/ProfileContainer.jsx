import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { Profile } from './Profile';
import {
  getOneUser, getStatus, setStatus, updateStatus,
} from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainerAPI extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userId;
    if (!userID) {
      userID = 18650;
    }
    this.props.getOneUser(userID);
    this.props.getStatus(userID);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

const ProfileContainer = compose(
  connect(mapStateToProps,
    {
      getOneUser,
      setStatus,
      updateStatus,
      getStatus,
    }),
  withRouter,
  withAuthRedirect,
)(ProfileContainerAPI);

export { ProfileContainer };
