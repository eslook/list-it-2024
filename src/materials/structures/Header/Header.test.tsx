import React from 'react';
import { render } from 'test-utils';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header Structure', () => {
  it('renders without crashing', () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });

  it('renders with default class', () => {
    render(<Header />);
    expect(document.querySelector('.header')).toBeInTheDocument();
  });
});
