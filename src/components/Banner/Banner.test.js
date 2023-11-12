import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Banner from './Banner';
import useNavigateTo from '../../hooks/useNavigateTo';

// Mock the useNavigateTo hook
jest.mock('../../hooks/useNavigateTo');

describe('Banner component', () => {
  // Test case for rendering the component
  test('renders Banner component correctly', () => {
    render(<Banner />);
    // Assert that the banner description is present (hidden on small screens)
    expect(screen.getByText(/See all pets available for adoption./i)).toBeInTheDocument();
  });
});
