import React from 'react';
import { render } from '@testing-library/react';
import BreakingBadDetails from './BreakingBadDetails';

test('renders without crashing', () => {
  const { baseElement } = render(<BreakingBadDetails />);
  expect(baseElement).toBeDefined();
});
