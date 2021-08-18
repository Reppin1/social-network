import { connect } from 'react-redux';
import React from 'react';
import { compose } from 'redux';
import { Users } from './Users';
import {
  followOnUser,
  getUsers,
  onTotalUserCountAC,
  unfollowOnUser,
} from '../../redux/users-reducer';
import { Preloader } from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.thisPage, this.props.pageSize);
  }

  onPageChange = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render() {
    return (
      <>
        {this.isFetching ? <Preloader /> : null}
        <Users
          onPageChange={this.onPageChange}
          followOnUser={this.props.followOnUser}
          unfollowOnUser={this.props.unfollowOnUser}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.usersPage.isFetching,
  pageSize: state.usersPage.pageSize,
  thisPage: state.usersPage.thisPage,
});

const UsersContainer = compose(
  connect(mapStateToProps, {
    onTotalUserCountAC,
    getUsers,
    followOnUser,
    unfollowOnUser,
  }),
  withAuthRedirect,
)(UsersAPIComponent);
export default UsersContainer;
