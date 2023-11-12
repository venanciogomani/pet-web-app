import React from 'react';
import { render, screen } from '@testing-library/react';
import PetAttribute from './PetAttribute';

describe('PetAttribute component', () => {
  test('renders PetAttribute component correctly with title and value', () => {
    render(<PetAttribute title="Name" value="Buddy" />);
    
    // Assert that the component renders correctly with the provided title and value
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Buddy/i)).toBeInTheDocument();
  });

  test('renders PetAttribute component correctly with different title and value', () => {
    render(<PetAttribute title="Species" value="Dog" />);
    
    // Assert that the component renders correctly with the provided title and value
    expect(screen.getByText(/Species/i)).toBeInTheDocument();
    expect(screen.getByText(/Dog/i)).toBeInTheDocument();
  });
});
