import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

import { StyledTitle } from './UsersList.styles';

const UsersList = ({ users, isLoading, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <StyledTitle>{isLoading ? 'Loading...' : 'List'}</StyledTitle>
        <StyledList>
          {users.map((userData, index) => (
            <UsersListItem deleteUser={deleteUser} index={index} userData={userData} key={userData.name} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
