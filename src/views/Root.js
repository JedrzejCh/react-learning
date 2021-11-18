import UsersList from 'components/organisms/UsersList/UsersList';
import Form from 'components/organisms/form/Form';
import styled, { ThemeProvider } from 'styled-components';
import { users as usersData } from 'data/users';
import React, { useState, useEffect } from 'react';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { Menu } from 'components/organisms/Menu/Menu';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const Wrapper = styled.div`
  height: 100vh;
  // width: ${() => `${window.innerWidth / 2}px`};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #f7f8fa; */
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const initialFormValues = {
  name: '',
  attendance: '',
  average: '',
};
const Root = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);
  const [formValues, formValuesChange] = useState(initialFormValues);

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setUsers(data);
        setLoadingState(false);
      })
      .catch((er) => console.log(er));

    // ComponentWillUnmount:
    // return ()=> {
    // window.removeEventListener()
    // }
  }, []);

  useEffect(() => {}, [isLoading]);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputValue = (e) => {
    formValuesChange({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);

    //reset pól formularza
    formValuesChange(initialFormValues);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          {/* <Link to="/add-user">dup</Link>
            <Link to="/">chuj</Link> */}
          <Menu />
          <Routes>
            <Route path="/add-user" element={<Form formValues={formValues} handleSubmit={handleSubmit} handleInputValue={handleInputValue} />} />
            <Route path="/" element={<UsersList deleteUser={deleteUser} users={users} isLoading={isLoading} />} exact />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
