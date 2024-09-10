import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Link from './Link';

describe('Link Basic', () => {
  it('should render without crashing', () => {
    render(<Link href="/">Link</Link>);
    const link = document.querySelector('.link') as HTMLLinkElement;
    expect(link).toBeInTheDocument();
    expect(link?.tagName).toBe('A');
  });
});
