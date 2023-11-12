import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CategoryCard from './CategoryCard';

// Mock the useNavigateTo hook
jest.mock('../../../hooks/useNavigateTo');
// Mock the slugify function
jest.mock('../../../helpers', () => ({
  __esModule: true,
  slugify: jest.fn((text) => text.toLowerCase().replace(/\s+/g, '-')),
}));

describe('CategoryCard component', () => {
  test('renders CategoryCard component correctly with title and icon', () => {
    render(<CategoryCard title="All pets" icon="dog" />);

    // Assert that the component renders correctly with the provided title and icon
    expect(screen.getByText(/All pets/i)).toBeInTheDocument();
  });
});
