import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  test('renders Button component correctly with label and show true', () => {
    render(<Button label="Click me" action={() => {}} show={true} />);

    // Assert that the component renders correctly with the provided label and show true
    expect(screen.getByRole('button')).toHaveClass('flex');
  });

  test('renders Button component correctly with label and show false', () => {
    render(<Button label="Click me" action={() => {}} show={false} />);

    // Assert that the component renders correctly with the provided label and show false
    expect(screen.getByRole('button')).toHaveClass('hidden');
  });

  test('clicking button calls action function', () => {
    const mockAction = jest.fn();

    render(<Button label="Click me" action={mockAction} show={true} />);

    // Click the button
    fireEvent.click(screen.getByRole('button'));
    // Assert that the action function is called
    expect(mockAction).toHaveBeenCalled();
  });
});
