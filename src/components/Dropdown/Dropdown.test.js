import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dropdown from './Dropdown';

// Mock the useNavigateTo hook
jest.mock('../../hooks/useNavigateTo');

describe('Dropdown component', () => {
  test('renders Dropdown component correctly with options', () => {
    const mockOptions = ['Option 1', 'Option 2', 'Option 3'];

    render(
      <MemoryRouter>
        <Dropdown options={mockOptions} />
      </MemoryRouter>
    );

    // Assert that the component renders correctly with the provided options
    expect(screen.getByText(/Option 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Option 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Option 3/i)).toBeInTheDocument();
  });
});
