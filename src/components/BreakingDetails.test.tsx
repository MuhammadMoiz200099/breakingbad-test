import React from 'react';
import { render } from '@testing-library/react';
import BreakingDetails from './BreakingDetails';
import { mockData } from "../mock/BreakingDetails.mock";

test('renders without crashing', () => {
  const { baseElement } = render(<BreakingDetails details={mockData} />);
  expect(baseElement).toBeDefined();
});
