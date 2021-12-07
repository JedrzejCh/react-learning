import React, { useState } from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormField from './FormField';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Form Field', () => {
  test('Render component with ThemeProvider', () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
