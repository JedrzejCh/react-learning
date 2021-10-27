import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './UsersListItem.styles';
import Button from 'components/atoms/button/Button';
import Average from 'components/atoms/average/Average';
import PersonName from 'components/atoms/personName/PersonName';
import Attendance from 'components/atoms/attendance/Attendance';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
  return (
    // <li className={[styles.user, styles.hasBorder].join(' ')}>
    <Wrapper>
      <Average rating={average} />
      <div>
        <PersonName name={name} />
        <Attendance rate={attendance} />
      </div>
      <Button />
      {/* <StyledButton isSecondary isSquare>x</StyledButton> */}
    </Wrapper>
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
