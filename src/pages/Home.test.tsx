import React from 'react';
import { render, screen } from '../utils/test-utils';
import Home from './Home';

describe('Home Page Test', () => {
  it('Should check the main title', () => {
    const container = render(<Home />);
    const value = container.getByTestId('classtitle');
    expect(value.innerHTML).toBe('Breaking Bad')
  });
  it('Should be defined back icon', () => {
    const container = render(<Home />);
    const value = container.getByTestId('classsubtitle');
    expect(value.innerHTML).toBe('Breaking Bad Characters');
  });
});
