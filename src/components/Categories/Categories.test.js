import React from 'react';
import { render, screen } from '@testing-library/react';
import Categories from './Categories';

// Mock the CategoryCard component
jest.mock('../Cards/CategoryCard/CategoryCard', () => ({
  __esModule: true,
  default: ({ title }) => <div data-testid={`category-card-${title}`}>{title}</div>,
}));

describe('Categories component', () => {
  test('renders Categories component correctly with category cards', () => {
    render(<Categories />);

    // Assert that the component renders correctly with the specified category cards
    expect(screen.getByText(/Categories/i)).toBeInTheDocument();
    expect(screen.getByTestId('category-card-All pets')).toBeInTheDocument();
    expect(screen.getByTestId('category-card-Location specific')).toBeInTheDocument();
    expect(screen.getByTestId('category-card-Age specific')).toBeInTheDocument();
    expect(screen.getByTestId('category-card-Available now')).toBeInTheDocument();
    expect(screen.getByTestId('category-card-For small or big homes')).toBeInTheDocument();
  });
});
