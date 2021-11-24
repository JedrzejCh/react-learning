import React, { useState } from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormField from './FormField';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';

describe('Form Field', () => {
  test('Render component with ThemeProvider', () => {
    renderWithThemeProvider(<FormField label="name" name="name" id="name" />);
  });
});
