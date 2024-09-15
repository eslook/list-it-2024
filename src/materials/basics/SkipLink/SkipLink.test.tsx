import React from 'react';
import { render, messages } from 'test-utils';
import '@testing-library/jest-dom';
import SkipLink from './SkipLink';

describe('SkipLink Basic', () => {
  it('renders without crashing', () => {
    const { container } = render(<SkipLink />);
    expect(container).toBeInTheDocument();
  });

  it('renders with default class', () => {
    const { container } = render(<SkipLink />);
    expect(container.firstElementChild).toHaveClass('skip-link');
  });

  it('links to #main-content', () => {
    render(<SkipLink />);
    const link = document.querySelector('.skip-link');
    expect(link).toHaveAttribute('href', '#main-content');
  });

  it('renders the localized "Skip to main content" text', () => {
    render(<SkipLink />);
    const link = document.querySelector('.skip-link');
    expect(link).toHaveTextContent(messages.skipLink.content);
  });
});
