import React from 'react';
import PropTypes from 'prop-types';
import styles from './UsersListItem.module.scss';
const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
  return (
    // <li className={[styles.user, styles.hasBorder].join(' ')}>
    <li className={`${styles.user} ${styles.hasBorder}`}>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>Attendance: {attendance}</p>
      </div>
      <button>x</button>
    </li>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
    name: PropTypes.string.isRequired,
  }),
};
export default UsersListItem;
