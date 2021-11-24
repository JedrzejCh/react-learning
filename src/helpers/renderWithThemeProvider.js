import React from 'react';
import { render } from '@testing-library/react';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';

export const renderWithThemeProvider = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
