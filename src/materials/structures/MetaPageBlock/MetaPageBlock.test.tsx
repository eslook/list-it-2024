import React from 'react';
import { render, screen, locale } from 'test-utils';
import '@testing-library/jest-dom';
import MetaPageBlock from './MetaPageBlock';

const mockProps = {
  title: 'Not meow-nd',
};

const mockPropsOptional = {
  code: '404',
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

  it('renders with default props', () => {
    render(<MetaPageBlock {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it('renders optional code', () => {
    render(<MetaPageBlock {...mockProps} code={mockPropsOptional.code} />);
    expect(screen.getByText(mockPropsOptional.code)).toBeInTheDocument();
  });

  it('renders optional description', () => {
    render(
      <MetaPageBlock
        {...mockProps}
        description={mockPropsOptional.description}
      />
    );
    expect(screen.getByText(mockPropsOptional.description)).toBeInTheDocument();
  });

  it('renders optional action', () => {
    render(<MetaPageBlock {...mockProps} action={mockPropsOptional.action} />);
    expect(screen.getByText(mockPropsOptional.action)).toBeInTheDocument();
  });

  it('renders action link to home if no actionFunc is provided', () => {
    render(<MetaPageBlock {...mockProps} action={mockPropsOptional.action} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', `/${locale}`);
  });

  it('renders action button if actionFunc is provided', () => {
    const mockActionFunc = jest.fn();
    render(
      <MetaPageBlock
        {...mockProps}
        action={mockPropsOptional.action}
        actionFunc={mockActionFunc}
      />
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls actionFunc when action button is clicked', () => {
    const mockActionFunc = jest.fn();
    render(
      <MetaPageBlock
        {...mockProps}
        action={mockPropsOptional.action}
        actionFunc={mockActionFunc}
      />
    );
    screen.getByRole('button').click();
    expect(mockActionFunc).toHaveBeenCalled();
  });
});
