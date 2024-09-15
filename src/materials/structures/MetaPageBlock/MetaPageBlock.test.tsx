import React from 'react';
import { render, screen, locale } from 'test-utils';
import '@testing-library/jest-dom';
import MetaPageBlock from './MetaPageBlock';

const mockProps = {
  title: 'Not meow-nd',
  description: 'This page is swiped off the table',
  action: 'Take me to the Cat Den',
};

describe('MetaPageBlock Structure', () => {
  it('renders without crashing', () => {
    const { container } = render(<MetaPageBlock {...mockProps} />);
    expect(container).toBeInTheDocument();
  });

  it('renders with default class', () => {
    const { container } = render(<MetaPageBlock {...mockProps} />);
    expect(container.firstElementChild).toHaveClass('meta-page-block');
  });

  it('renders title, description and action', () => {
    render(<MetaPageBlock {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
    expect(screen.getByText(mockProps.action)).toBeInTheDocument();
  });

  it('renders optional code', () => {
    render(<MetaPageBlock {...mockProps} code="404" />);
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('renders action link to home if no actionFunc is provided', () => {
    render(<MetaPageBlock {...mockProps} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', `/${locale}`);
  });

  it('renders action button if actionFunc is provided', () => {
    const mockActionFunc = jest.fn();
    render(<MetaPageBlock {...mockProps} actionFunc={mockActionFunc} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls actionFunc when action button is clicked', () => {
    const mockActionFunc = jest.fn();
    render(<MetaPageBlock {...mockProps} actionFunc={mockActionFunc} />);
    screen.getByRole('button').click();
    expect(mockActionFunc).toHaveBeenCalled();
  });
});
