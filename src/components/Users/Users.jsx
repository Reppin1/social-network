import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './users.module.css';
import userPhoto from '../../assets/images/ava.png';
import { Paginator } from '../common/Paginator/Paginator';

const Users = (props) => {
  const users = useSelector((state) => state.usersPage.users);
  const buttonDisable = useSelector((state) => state.usersPage.buttonDisable);

  return (
    <div className={styles.main}>
      <Paginator onPageChange={props.onPageChange} />
      {
        users.map((user) => (
          <div key={user.id} className={styles.info}>
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
