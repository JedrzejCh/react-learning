import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';
import FormField from 'components/molecules/formField/FormField';
import { StyledTitle } from './UsersList.styles';
import { Button } from 'components/atoms/Button/Button';

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

// const mockAPI = (success) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (users) {
//         resolve([...users]);
//       } else {
//         reject({ message: 'Error' });
//       }
//     }, 2000);
//   });
// };

// class UsersList extends React.Component {
//   state = {
//     users: [],
//     isLoading: false,
//   };

//   componentDidMount() {
//     this.setState({ isLoading: true });
//     mockAPI()
//       .then((data) => {
//         this.setState({ users: data });
//         this.setState({ isLoading: false });
//       })
//       .catch((er) => console.log(er));
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.isLoading !== this.state.isLoading) {
//       console.log('loading state has change');
//     }
//   }

//   deleteUser = (name) => {
//     const filteredUsers = this.state.users.filter((user) => user.name !== name);
//     this.setState({ users: filteredUsers });
//   };

//   render() {
//     return (
//       <Wrapper>
//         <h1>{this.state.isLoading ? 'Loading..' : 'List'}</h1>
//         <StyledList>
//           {this.state.users.map((userData, index) => (
//             <UsersListItem deleteUser={this.deleteUser} index={index} userData={userData} key={userData.name} />
//           ))}
//         </StyledList>
//       </Wrapper>
//     );
//   }
// }

export default UsersList;
