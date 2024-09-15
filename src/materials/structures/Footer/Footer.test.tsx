import React from 'react';
import { render } from 'test-utils';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer Structure', () => {
  it('renders without crashing', () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
  });

  it('renders with default class', () => {
    render(<Footer />);
    expect(document.querySelector('.footer')).toBeInTheDocument();
  });
});
