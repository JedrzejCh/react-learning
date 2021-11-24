// import { NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// const activeClassName = 'active-class';
// export const MenuItemStyles = styled(NavLink).attrs({ activeClassName })`
export const MenuItemStyles = styled(NavLink)`
  color: #737c8e;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};
  cursor: pointer;
  margin: 10px 25px;
  text-align: right;
  text-decoration: none;

  &.active {
    color: #111;
  }
`;
