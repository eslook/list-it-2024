import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardList from './CardList';

describe('CardList Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<CardList>Test Child</CardList>);
    expect(container).toBeInTheDocument();
  });

  it('renders with default class', () => {
    const { container } = render(<CardList>Test Child</CardList>);
    expect(container.firstElementChild).toHaveClass('card-list');
  });

  it('renders children', () => {
    const { getByText } = render(
      <CardList>
        <div>Child 1</div>
        <div>Child 2</div>
      </CardList>
    );
    expect(getByText('Child 1')).toBeInTheDocument();
    expect(getByText('Child 2')).toBeInTheDocument();
  });

  it('renders children within list items', () => {
    const { container } = render(
      <CardList>
        <div>Child 1</div>
        <div>Child 2</div>
      </CardList>
    );
    const listItems = container.querySelectorAll('.card-list-item');
    expect(listItems.length).toBe(2);
    expect(listItems[0]).toHaveTextContent('Child 1');
    expect(listItems[1]).toHaveTextContent('Child 2');
  });
});
