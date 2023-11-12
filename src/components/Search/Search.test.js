import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';

// Mock custom hooks
jest.mock('../../hooks/useGetPaginatedPets');
jest.mock('../../hooks/useSearch');
jest.mock('../../hooks/useNavigateTo');
jest.mock('../../hooks/useDropdown');
jest.mock('../../helpers', () => ({ boldenMatchingText: jest.fn() }));

describe('Search component', () => {
  test('renders Search component correctly', () => {
    // Mock necessary hook values
    const mockPets = [];
    const mockPetUniqueSpecies = [];
    const mockHandleSearchSubmit = jest.fn();
    const mockHandleSearch = jest.fn();
    const mockHandleSortByDate = jest.fn();
    const mockBoldenMatchingText = jest.fn();

    require('../../hooks/useGetPaginatedPets').default.mockReturnValue({
      pets: mockPets,
      petUniqueSpecies: mockPetUniqueSpecies,
    });

    require('../../hooks/useSearch').default.mockReturnValue({
      searchTerm: '',
      searchResults: [],
      showSearchResults: false,
      handleSearchSubmit: mockHandleSearchSubmit,
      handleSearch: mockHandleSearch,
    });

    require('../../hooks/useNavigateTo').default.mockReturnValue(jest.fn());

    require('../../hooks/useDropdown').default.mockReturnValue({
      showDropdown: false,
      handleToggleDropdown: jest.fn(),
    });

    require('../../helpers').boldenMatchingText.mockReturnValue(mockBoldenMatchingText);

    render(<Search sortByDate={false} handleSortByDate={mockHandleSortByDate} />);
    
    // Assert that the component renders correctly
    expect(screen.getByText(/Pets/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search for pets/i)).toBeInTheDocument();
    expect(screen.getByText(/Type/i)).toBeInTheDocument();
    expect(screen.getByText(/Category/i)).toBeInTheDocument();
    expect(screen.getByText(/Last added/i)).toBeInTheDocument();
  });

  test('handles search input change and submit', () => {
    // Mock necessary hook values
    const mockPets = [];
    const mockPetUniqueSpecies = [];
    const mockHandleSearchSubmit = jest.fn();
    const mockHandleSearch = jest.fn();
    const mockHandleSortByDate = jest.fn();
    const mockBoldenMatchingText = jest.fn();

    require('../../hooks/useGetPaginatedPets').default.mockReturnValue({
      pets: mockPets,
      petUniqueSpecies: mockPetUniqueSpecies,
    });

    require('../../hooks/useSearch').default.mockReturnValue({
      searchTerm: '',
      searchResults: [],
      showSearchResults: false,
      handleSearchSubmit: mockHandleSearchSubmit,
      handleSearch: mockHandleSearch,
    });

    require('../../hooks/useNavigateTo').default.mockReturnValue(jest.fn());

    require('../../hooks/useDropdown').default.mockReturnValue({
      showDropdown: false,
      handleToggleDropdown: jest.fn(),
    });

    require('../../helpers').boldenMatchingText.mockReturnValue(mockBoldenMatchingText);

    render(<Search sortByDate={false} handleSortByDate={mockHandleSortByDate} />);
    
    // Type in the search input
    fireEvent.change(screen.getByPlaceholderText(/Search for pets/i), { target: { value: 'dog' } });
    expect(mockHandleSearch).toHaveBeenCalledWith('dog');

    // Submit the search form
    fireEvent.submit(screen.getByPlaceholderText(/Search for pets/i));
    expect(mockHandleSearchSubmit).toHaveBeenCalled();
  });
});
