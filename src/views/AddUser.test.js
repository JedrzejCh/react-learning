import React, { useState } from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddUser from './AddUser';
import { renderWithProviders } from 'helpers/renderWithProviders';
import Dashboard from './Dashboard';
describe('Form Field', () => {
  it('renders the component', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Test' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '44' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.4' } });
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Testff');
  });
});
