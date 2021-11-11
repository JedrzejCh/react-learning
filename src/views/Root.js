import UsersList from 'components/organisms/UsersList/UsersList';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
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

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <nav>
            <Link to="/">chuj</Link>
            <Link to="/add-user">dup</Link>
          </nav>
          <Routes>
            <Route path="/" element={<UsersList />} exact />
            <Route path="/add-user" element={<UsersList />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
