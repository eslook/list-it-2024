/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { render } from 'test-utils';
import '@testing-library/jest-dom';
import Image from './Image';

const mockProps = {
  src: '/halloween.jpg',
  alt: 'Best holiday',
  width: 100,
  height: 100,
};

describe('Image Basic', () => {
  it('renders with default props', () => {
    const { getByAltText } = render(<Image {...mockProps} />);
    const image = getByAltText(mockProps.alt);
    expect(image).toBeInTheDocument();
    // Don't check for the src attribute, as it is transformed by Next/Image
    expect(image).toHaveAttribute('width', mockProps.width.toString());
    expect(image).toHaveAttribute('height', mockProps.height.toString());
  });

  it('renders default class and provided additional class ', () => {
    const { container } = render(
      <Image {...mockProps} className="additional-class" />
    );
    const imageWrapper = container.firstElementChild;
    expect(imageWrapper).toHaveClass('image');
    expect(imageWrapper).toHaveClass('additional-class');
  });

  it('sets unoptimized if gif is provided', () => {
    const { getByAltText } = render(
      <Image {...mockProps} src="/halloween.gif" />
    );
    const image = getByAltText(mockProps.alt);
    // When not optimized, the src is not transformed
    expect(image).toHaveAttribute('src', '/halloween.gif');
  });

  it('forwards remaining props to NextImage', () => {
    const { getByAltText } = render(<Image {...mockProps} loading={'eager'} />);
    const image = getByAltText(mockProps.alt);
    expect(image).toHaveAttribute('loading', 'eager');
  });
});
