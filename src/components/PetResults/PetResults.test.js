import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import PetResults from './PetResults';

// Mock custom hook
jest.mock('../../hooks/useGetPaginatedPets');

describe('PetResults component', () => {
  test('renders PetResults component correctly with pets', () => {
    // Mock necessary hook values
    const mockPets = [
      { id: 1, name: 'Buddy', species: 'Dog', age: 'Adult', imageUrl: 'buddy.jpg' },
      { id: 2, name: 'Whiskers', species: 'Cat', age: 'Kitten', imageUrl: 'whiskers.jpg' },
    ];
    const mockHandleLoadMore = jest.fn();
    const mockResultsCount = 2;

    require('../../hooks/useGetPaginatedPets').default.mockReturnValue({
      pets: mockPets,
      handleLoadMore: mockHandleLoadMore,
      resultsCount: mockResultsCount,
    });

    render(
      // Wrap the component with MemoryRouter
      <MemoryRouter>
        <PetResults initialCount={5} sortByDate={false} />
      </MemoryRouter>
    );
    
    // Assert that the component renders correctly with pet cards
    expect(screen.getByText(/Results/i)).toBeInTheDocument();
    expect(screen.getByText(/Buddy/i)).toBeInTheDocument();
    expect(screen.getByText(/Whiskers/i)).toBeInTheDocument();
    expect(mockHandleLoadMore).not.toHaveBeenCalled(); // Load more button is present but not clicked
  });

  test('renders PetResults component correctly with no pets', () => {
    // Mock necessary hook values
    const mockPets = [];
    const mockHandleLoadMore = jest.fn();
    const mockResultsCount = 0;

    require('../../hooks/useGetPaginatedPets').default.mockReturnValue({
      pets: mockPets,
      handleLoadMore: mockHandleLoadMore,
      resultsCount: mockResultsCount,
    });

    render(
      // Wrap the component with MemoryRouter
      <MemoryRouter>
        <PetResults initialCount={5} sortByDate={false} />
      </MemoryRouter>
    );
    
    // Assert that the component renders correctly with a message when no pets are found
    expect(screen.getByText(/Results/i)).toBeInTheDocument();
    expect(screen.getByText(/No pets found/i)).toBeInTheDocument();
    expect(screen.queryByText(/Load more/i)).toBeNull(); // Load more button is not present
  });

  test('clicking "Load more" button calls handleLoadMore function', () => {
    // Mock necessary hook values
    const mockPets = [
      { id: 1, name: 'Buddy', species: 'Dog', age: 'Adult', imageUrl: 'buddy.jpg' },
      { id: 2, name: 'Whiskers', species: 'Cat', age: 'Kitten', imageUrl: 'whiskers.jpg' },
    ];
    const mockHandleLoadMore = jest.fn();
    const mockResultsCount = 2;

    require('../../hooks/useGetPaginatedPets').default.mockReturnValue({
      pets: mockPets,
      handleLoadMore: mockHandleLoadMore,
      resultsCount: mockResultsCount,
    });

    render(
      // Wrap the component with MemoryRouter
      <MemoryRouter>
        <PetResults initialCount={5} sortByDate={false} />
      </MemoryRouter>
    );
  });
});
