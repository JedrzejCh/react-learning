import styled from 'styled-components';

export const AttendanceStyles = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: 300;
  margin-top: 0;
  line-height: 13px;
`;
