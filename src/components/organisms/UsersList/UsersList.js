import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import PropTypes from 'prop-types';
import { StyledTitle } from './UsersList.styles';
import { UserShape } from 'types';

const UsersList = ({ users, isLoading, deleteUser }) => {
  return (
    <>
      <StyledTitle>{isLoading ? 'Loading...' : 'List'}</StyledTitle>
      <StyledList>
        {users.map((userData, index) => (
          <UsersListItem index={index} userData={userData} key={userData.name} />
        ))}
      </StyledList>
    </>
  );
};
UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};
export default UsersList;
