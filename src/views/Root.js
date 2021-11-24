import styled, { ThemeProvider } from 'styled-components';

import React, { useState, useEffect } from 'react';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import AddUser from './AddUser';
import UsersProvider from 'providers/UsersProvider';
const Wrapper = styled.div`
  height: 100vh;
  // width: ${() => `${window.innerWidth / 2}px`};
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Routes>
                <Route path="/add-user" element={<AddUser />} />
                <Route path="/" element={<Dashboard />} exact />
              </Routes>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
