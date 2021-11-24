import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './UsersListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import Average from 'components/atoms/average/Average';
import PersonName from 'components/atoms/personName/PersonName';
import Attendance from 'components/atoms/attendance/Attendance';
import { UserShape } from 'types';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ index, userData: { name, average, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    // <li className={[styles.user, styles.hasBorder].join(' ')}>
    <Wrapper>
      <Average rating={average} />
      <div>
        <PersonName name={name} />
        <Attendance attendance={attendance} />
      </div>
      <DeleteButton onClick={() => deleteUser(name)} />
      {/* <StyledButton isSecondary isSquare>x</StyledButton> */}
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};
export default UsersListItem;
