import UsersList from 'components/organisms/UsersList/UsersList';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <UsersList />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
