import React from 'react';
import { render } from 'test-utils';
import '@testing-library/jest-dom';
import HGroup from './HGroup';

describe('HGroup Basic', () => {
  it('renders with default props', () => {
    const { container } = render(<HGroup>Default</HGroup>);
    expect(container).toBeInTheDocument();
  });

  it('renders with isReversed prop', () => {
    render(<HGroup isReversed>Reversed</HGroup>);
    const hgroup = document.querySelector('.hgroup');
    expect(hgroup).toHaveClass('is-reversed');
  });

  it('renders with children', () => {
    render(
      <HGroup>
        <h1>Title</h1>
        <p>Subtitle</p>
      </HGroup>
    );
    const hgroup = document.querySelector('.hgroup');
    expect(hgroup).toBeInTheDocument();
    expect(hgroup).toContainHTML('<h1>Title</h1>');
    expect(hgroup).toContainHTML('<p>Subtitle</p>');
  });
});
