import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './users.module.css';
import userPhoto from '../../assets/images/ava.png';

const Users = (props) => {
  const users = useSelector((state) => state.usersPage.users);
  const pageSize = useSelector((state) => state.usersPage.pageSize);
  const totalUserCount = useSelector((state) => state.usersPage.totalUserCount);
  const thisPage = useSelector((state) => state.usersPage.thisPage);
  const buttonDisable = useSelector((state) => state.usersPage.buttonDisable);
  const usersCount = Math.ceil(totalUserCount / pageSize);
  const pages = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= usersCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => (
          // eslint-disable-next-line max-len
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
          <span
            className={thisPage === p ? styles.selected : ''}
            onClick={() => {
              props.onPageChange(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>
      {
        users.map((user) => (
          <div key={user.id}>
            <span>
              <div>
                <NavLink to={`/profile/${user.id}`}>
                  <img
                    src={user.photos.small != null ? user.photos.small : userPhoto}
                    className={styles.photo}
                    alt=""
                  />
                </NavLink>
              </div>
              <div>
                {user.followed
                  ? (
                    <button
                      type="button"
                      disabled={buttonDisable.some((id) => id === user.id)}
                      onClick={() => {
                        props.unfollowOnUser(user.id);
                      }}
                    >
                      Unfollowed
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      disabled={buttonDisable.some((id) => id === user.id)}
                      onClick={() => {
                        props.followOnUser(user.id);
                      }}
                    >
                      Followed
                    </button>
                  )}
              </div>
            </span>
            <span>
              <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>locations country</div>
                <div>locations city</div>
              </span>
            </span>
          </div>
        ))
      }
    </div>
  );
};

export { Users };
