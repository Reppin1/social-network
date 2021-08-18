import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './paginator.module.css';

const Paginator = ({ onPageChange }) => {
  const totalUserCount = useSelector((state) => state.usersPage.totalUserCount);
  const pageSize = useSelector((state) => state.usersPage.pageSize);
  const thisPage = useSelector((state) => state.usersPage.thisPage);
  const [portionNumber, setPortionNumber] = useState(1);
  const usersCount = Math.ceil(totalUserCount / pageSize);
  const portionSize = 5;
  const portionPage = Math.ceil(usersCount / portionSize);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * pageSize;
  const pages = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= usersCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && <button type="button" onClick={() => { setPortionNumber(portionNumber - 1); }}>Prev</button>}
      {pages.filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p) => (
        // eslint-disable-next-line max-len
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <span
          className={
            thisPage === p
              ? styles.selectedPage : styles.page
            }
          key={p}
          onClick={() => {
            onPageChange(p);
          }}
        >
          {p}
        </span>
      ))}
      { portionPage > portionNumber && <button type="button" onClick={() => { setPortionNumber(portionNumber + 1); }}>NEXT</button> }
    </div>
  );
};

export { Paginator };
