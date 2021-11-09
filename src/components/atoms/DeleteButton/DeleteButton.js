import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';
import { StyledButton } from './DeleteButton.styles';

const DeleteButton = (props) => {
  console.log('props:', props);
  return (
    <StyledButton {...props}>
      <DeleteIcon />
    </StyledButton>
  );
};

export default DeleteButton;
