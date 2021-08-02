import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Profile } from './Profile';
import { setUserProfile } from '../../redux/profile-reducer';
import { usersAPI } from '../../api/api';

class ProfileContainerAPI extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userId;
    if (!userID) {
      userID = 18650;
    }
    usersAPI.getOneUser(userID)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const WithURLDataContainerComponent = withRouter(ProfileContainerAPI);

const ProfileContainer = connect(mapStateToProps,
  { setUserProfile })(WithURLDataContainerComponent);

export { ProfileContainer };