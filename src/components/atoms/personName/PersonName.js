import React from 'react';
import { PersonNameStyles } from './PersonName.styles';
const PersonName = ({ name }) => {
  return <PersonNameStyles>{name}</PersonNameStyles>;
};

export default PersonName;
