import React from 'react';
import Menu from 'components/organisms/Menu/Menu';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Menu />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
