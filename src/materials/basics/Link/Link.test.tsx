import React from 'react';
import { render, locale } from 'test-utils';
import '@testing-library/jest-dom';
import Link from './Link';

describe('Link Basic', () => {
  it('renders without crashing', () => {
    const { container } = render(<Link href="/">Link</Link>);
    expect(container).toBeInTheDocument();
  });

  it('renders with default class', () => {
    const { container } = render(<Link href="/">Link</Link>);
    expect(container.firstElementChild).toHaveClass('link');
  });

  it('renders the children', () => {
    render(<Link href="/">Link</Link>);
    const link = document.querySelector('.link');
    expect(link).toHaveTextContent('Link');
  });

  it('renders the href attribute', () => {
    render(<Link href="/">Link</Link>);
    const link = document.querySelector('.link');
    expect(link).toHaveAttribute('href', `/${locale}`);
  });

  it('renders the title attribute', () => {
    render(
      <Link href="/" title="Read more about cats in the wild">
        Read more
      </Link>
    );
    const link = document.querySelector('.link');
    expect(link).toHaveTextContent('Read more');
    expect(link).toHaveAttribute('title', 'Read more about cats in the wild');
  });

  it('renders is-inactive class when variant is inactive', () => {
    render(
      <Link href="/" variant="inactive">
        Link
      </Link>
    );
    const link = document.querySelector('.link');
    expect(link).toHaveClass('is-inactive');
  });

  it('renders is-button class when variant is button', () => {
    render(
      <Link href="/" variant="button">
        Link
      </Link>
    );
    const link = document.querySelector('.link');
    expect(link).toHaveClass('is-button');
  });
});
