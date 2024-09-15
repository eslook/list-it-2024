import React from 'react';
import { render, screen } from 'test-utils';
import '@testing-library/jest-dom';
import Title from './Title';

describe('Title Basic', () => {
  it('renders with default props', () => {
    const { container } = render(<Title value="Title" />);
    expect(container).toBeInTheDocument();
    expect(container.firstElementChild?.tagName).toBe('H3');
    expect(container.firstElementChild).toHaveClass('title');
    expect(container.firstElementChild).toHaveClass('is-3');
  });

  it('renders with value prop', () => {
    const text = 'Test Title';
    render(<Title value={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders with a custom element', () => {
    const { container } = render(<Title value="Title" element="p" />);
    expect(container.firstElementChild?.tagName).toBe('P');
  });

  it('renders with size 1', () => {
    const { container } = render(<Title value="Title" size={1} />);
    expect(container.firstElementChild).toHaveClass('is-1');
  });

  it('renders with size 2', () => {
    const { container } = render(<Title value="Title" size={2} />);
    expect(container.firstElementChild).toHaveClass('is-2');
  });

  it('renders with size 3', () => {
    const { container } = render(<Title value="Title" size={3} />);
    expect(container.firstElementChild).toHaveClass('is-3');
  });

  it('renders with is-sr-only class when isSrOnly is true', () => {
    const { container } = render(<Title value="Title" isSrOnly />);
    expect(container).toBeInTheDocument();
    expect(container).not.toHaveClass('title');
    expect(container.firstElementChild).toHaveClass('is-sr-only');
  });
});
