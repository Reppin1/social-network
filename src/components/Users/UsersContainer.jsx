import { connect } from 'react-redux';
import React from 'react';
import { Users } from './Users';
import {
  followOnUser,
  getUsers,
  onTotalUserCountAC,
  unfollowOnUser,
} from '../../redux/users-reducer';
import { Preloader } from '../common/Preloader/Preloader';

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          users={this.props.users}
          buttonDisables={this.props.buttonDisable}
          followOnUser={this.props.followOnUser}
          unfollowOnUser={this.props.unfollowOnUser}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUserCount: state.usersPage.totalUserCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  buttonDisable: state.usersPage.buttonDisable,
});

const UsersContainer = connect(mapStateToProps, {
  onTotalUserCountAC,
  getUsers,
  followOnUser,
  unfollowOnUser,
})(UsersAPIComponent);
export { UsersContainer };
