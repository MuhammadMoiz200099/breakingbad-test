import React from 'react';
import { render, screen } from './utils/test-utils';
import App from './App';

describe('App Page Test', () => {
  test('Should be render', () => {
    const container = render(<App />);
    expect(container).toBeDefined();
  });
});
