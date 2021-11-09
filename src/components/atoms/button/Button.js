import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
  margin: 15px 0;
`;
