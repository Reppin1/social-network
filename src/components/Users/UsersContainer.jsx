import { connect } from 'react-redux';
import React from 'react';
import { usersAPI } from '../../api/api';
import { Users } from './Users';
import {
  changeCurrentPageAC, followAC, onTotalUserCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC,
} from '../../redux/users-reducer';
import { Preloader } from '../common/Preloader/Preloader';

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetchingAC(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((response) => {
      this.props.toggleIsFetchingAC(false);
      this.props.setUsersAC(response.data.items);
      this.props.onTotalUserCountAC(response.data.totalCount);
    });
  }

  onPageChange = (pageNumber) => {
    this.props.changeCurrentPageAC(pageNumber);
    this.props.toggleIsFetchingAC(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((response) => {
      this.props.toggleIsFetchingAC(false);
      this.props.setUsersAC(response.data.items);
    });
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
          fallowUser={this.props.followAC}
          unfollowUser={this.props.unfollowAC}
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
});

const UsersContainer = connect(mapStateToProps, {
  followAC, unfollowAC, setUsersAC, changeCurrentPageAC, onTotalUserCountAC, toggleIsFetchingAC,
})(UsersAPIComponent);
export { UsersContainer };
