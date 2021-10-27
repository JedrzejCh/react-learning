import styled from 'styled-components';

export const AverageStyles = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 20px;
  border-radius: 50%;
  /* background-color: ${({ theme, rate }) => (rate <= 8 ? theme.colors.warning : theme.colors.success)}; */

  background: ${({ theme, rate }) => {
    if (rate > 4) return theme.colors.success;
    if (rate > 3) return theme.colors.warning;
    if (rate > 1) return theme.colors.error;
    return theme.colors.grey;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 700;
  }
`;
