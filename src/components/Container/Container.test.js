import React from 'react';
import { render, screen } from '@testing-library/react';
import Container from './Container';

describe('Container component', () => {
  test('renders Container component correctly with children', () => {
    render(
      <Container>
        <div data-testid="child">Child Component</div>
      </Container>
    );

    // Assert that the component renders correctly with the provided children
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });
});
