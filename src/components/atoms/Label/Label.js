import styled from 'styled-components';

export const Label = styled.label`
  font-family: Montserrat, sans-serif;
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
