import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
  return (
    // <li className={[styles.user, styles.hasBorder].join(' ')}>
    <Wrapper>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>Attendance: {attendance}</p>
      </div>
      <StyledButton>
        <DeleteIcon />
      </StyledButton>
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
