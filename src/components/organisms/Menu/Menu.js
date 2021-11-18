import React from 'react';
import styled from 'styled-components';
import { Nav } from './Menu.styles';
import MenuItem from 'components/molecules/NavItem/MenuItem';
export const Menu = () => {
  return (
    <Nav>
      <MenuItem navItemName={'Main'} navItemTo={'/'} />
      <MenuItem navItemName={'Add user'} navItemTo={'/add-user'} />
      {/* <MenuItem to={'/'}>x</MenuItem> */}
    </Nav>
  );
};

export default Menu;
