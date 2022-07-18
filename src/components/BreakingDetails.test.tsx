import React from 'react';
import { render, screen } from '../utils/test-utils';
import BreakingDetails from './BreakingDetails';
import { mockData } from "../mock/BreakingDetails.mock";

describe('Home Page Test', () => {
  it(`should get the name ${mockData.name}`, () => {
    let container = render(<BreakingDetails details={mockData} />);
    const value = container.getByTestId('name');
    expect(value.innerHTML).toBe(mockData.name)
  });
  it(`should get all the occupations`, () => {
    let container = render(<BreakingDetails details={mockData} />);
    const value = container.getByTestId('occupation');
    expect(value.children.length).toBe(mockData.occupation.length);
    mockData.occupation.forEach((item, idx) => {
      const apitem = value.children.item(idx);
      expect(apitem?.innerHTML).toBe(String(item));
    })
  });
  it(`should get the status to be ${mockData.status}`, () => {
    let container = render(<BreakingDetails details={mockData} />);
    const value = container.getByTestId('status');
    expect(value.innerHTML).toBe(mockData.status)
  });
  it(`should get the nickname to be ${mockData.nickname}`, () => {
    let container = render(<BreakingDetails details={mockData} />);
    const value = container.getByTestId('nickname');
    expect(value.innerHTML).toBe(mockData.nickname)
  });
  it(`should get all the appearances`, () => {
    let container = render(<BreakingDetails details={mockData} />);
    const value = container.getByTestId('appearance');
    expect(value.children.length).toBe(mockData.appearance.length);
    mockData.appearance.forEach((item, idx) => {
      const apitem = value.children.item(idx);
      expect(apitem?.innerHTML).toBe(String(item));
    })
  });
});
