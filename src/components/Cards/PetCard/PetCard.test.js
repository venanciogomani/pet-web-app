import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PetCard from './PetCard';

// Mock the useNavigateTo hook
jest.mock('../../../hooks/useNavigateTo');

const mockPet = {
  id: '1',
  name: 'Buddy',
  photoUrl: 'https://example.com/buddy.jpg',
};

describe('PetCard component', () => {
  test('renders PetCard component correctly with pet details', () => {
    render(
      <MemoryRouter>
        <PetCard pet={mockPet} />
      </MemoryRouter>
    );

    // Assert that the component renders correctly with the provided pet details
    expect(screen.getByText(/Buddy/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Buddy/i)).toBeInTheDocument();
  });
});
