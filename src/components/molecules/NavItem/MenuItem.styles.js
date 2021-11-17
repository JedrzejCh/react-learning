// import { NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MenuItemStyles = styled(NavLink)`
  color: #737c8e;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.m};
  cursor: pointer;
  padding: 10px 25px;
  text-align: right;
  text-decoration: none;
  &.active {
    color: #111;
  }
  &:hover {
    text-decoration: underline;
  }
`;
// export const MenuItemStyles = styled.a`
//   color: #737c8e;
//   font-weight: bold;
//   font-size: ${({ theme }) => theme.fontSize.m};
//   cursor: pointer;
//   padding: 0 25px;
//   text-align: right;
//   padding-bottom: 15px;
// `;
