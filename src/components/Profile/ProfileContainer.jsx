import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Profile } from './Profile';
import { getOneUser } from '../../redux/profile-reducer';

class ProfileContainerAPI extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userId;
    if (!userID) {
      userID = 18650;
    }
    this.props.getOneUser(userID);
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
  { getOneUser })(WithURLDataContainerComponent);

export { ProfileContainer };
