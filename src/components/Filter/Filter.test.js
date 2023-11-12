import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Filter from './Filter';

describe('Filter component', () => {
  test('renders Filter component correctly with different name and options', () => {
    const mockOptions = ['Small', 'Medium', 'Large'];

    render(
      <MemoryRouter>
        <Filter name="Size" options={mockOptions} action={() => {}} toggled={true} />
      </MemoryRouter>
    );

    // Assert that the component renders correctly with the provided name and options
    expect(screen.getByText(/Size/i)).toBeInTheDocument();
    expect(screen.getByText(/Small/i)).toBeInTheDocument();
    expect(screen.getByText(/Medium/i)).toBeInTheDocument();
    expect(screen.getByText(/Large/i)).toBeInTheDocument();
  });

  test('clicking filter button calls action function', () => {
    const mockOptions = ['Option 1', 'Option 2', 'Option 3'];
    const mockAction = jest.fn();

    render(
      <MemoryRouter>
        <Filter name="Type" options={mockOptions} action={mockAction} toggled={false} />
      </MemoryRouter>
    );

    // Click the filter button
    fireEvent.click(screen.getByText(/Type/i));
    // Assert that the action function is called
    expect(mockAction).toHaveBeenCalled();
  });
});
