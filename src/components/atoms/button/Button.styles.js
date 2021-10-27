import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.grey};
  // background-color: ${(props) => (props.isSecondary ? '#f1f1f1' : '#c0c7d6')}
  // border-radius: ${({ isSquare }) => (isSquare ? '0px' : '50px')};
  border: none;
  border-radius: 50%;
  transition: 0.3s all;
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 14px;
  &:hover {
    opacity: 0.7;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;
