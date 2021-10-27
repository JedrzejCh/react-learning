import styled from 'styled-components';

export const PersonNameStyles = styled.p`
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
