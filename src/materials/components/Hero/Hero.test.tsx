import React from 'react';
import { render, screen } from 'test-utils';
import '@testing-library/jest-dom';
import Hero from './Hero';

const mockProps = {
  children: (
    <>
      <h1>Test Title</h1>
      <p>Test Label</p>
    </>
  ),
};

describe('Hero Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Hero {...mockProps} />);
    expect(container).toBeInTheDocument();
  });

  it('renders with default class', () => {
    const { container } = render(<Hero {...mockProps} />);
    expect(container.firstElementChild).toHaveClass('hero');
  });

  it('renders children', () => {
    render(<Hero {...mockProps} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });
});
