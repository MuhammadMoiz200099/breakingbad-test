import React from 'react';
import { render, screen } from '../../utils/test-utils';
import BreakingBadDetails from './BreakingBadDetails';
import {createMemoryHistory} from 'history';
import { Router } from 'react-router-dom';

const BreakingBadDetailsWithRouter = () => {
  const history = createMemoryHistory();
  return (
      <Router history={history}>
          <BreakingBadDetails />
      </Router>
  )
};

describe('Home Page Test', () => {
  it('Should check the main title', () => {
    const container = render(<BreakingBadDetailsWithRouter />);
    const value = container.getByTestId('maintitle');
    expect(value.innerHTML).toBe('Breaking Bad')
  });
  it('Should be defined back icon', () => {
    const container = render(<BreakingBadDetailsWithRouter />);
    const value = container.getByTestId('backicon');
    expect(value).toBeDefined();
  });
});
