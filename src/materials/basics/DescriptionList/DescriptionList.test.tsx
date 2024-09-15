import React from 'react';
import { render, screen } from 'test-utils';
import '@testing-library/jest-dom';
import DescriptionList from './DescriptionList';

const mockProps = {
  items: [
    { key: 'Meow', value: 'Nya~n' },
    { key: 'Mrruh mrrrr', value: 'Miaow, miaow' },
    { key: 'Mrow yowl', value: 'Yowl, meow: mrruh miauw' },
  ],
};

describe('DescriptionList Basic', () => {
  it('renders without crashing', () => {
    const { container } = render(<DescriptionList {...mockProps} />);
    expect(container).toBeInTheDocument();
  });

  it('renders with default class', () => {
    const { container } = render(<DescriptionList {...mockProps} />);
    expect(container.firstElementChild).toHaveClass('description-list');
  });

  it('renders items', () => {
    render(<DescriptionList {...mockProps} />);
    mockProps.items.forEach(({ key, value }) => {
      expect(screen.getByText(key)).toBeInTheDocument();
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });
});
