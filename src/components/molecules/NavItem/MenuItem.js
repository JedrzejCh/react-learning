import React from 'react';
import { MenuItemStyles } from './MenuItem.styles';
const MenuItem = ({ navItemName, navItemTo }) => {
  return <MenuItemStyles to={navItemTo}>{navItemName}</MenuItemStyles>;
};

export default MenuItem;
