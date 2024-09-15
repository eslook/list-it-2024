import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Basic', () => {
  it('should render with default props', () => {
    const { container } = render(<Button>Button</Button>);
    expect(container).toBeInTheDocument();
    expect(container.firstElementChild?.nodeName).toBe('BUTTON');
    expect(container.firstElementChild).toHaveAttribute('type', 'button');
  });

  it('should render with title prop', () => {
    const title = 'More about cats in the wild';
    render(<Button title={title}>Read more</Button>);
    const button = document.querySelector('.button') as HTMLButtonElement;
    expect(button).toHaveAttribute('title', title);
  });

  it('should render with type button', () => {
    render(<Button type="button">Button</Button>);
    const button = document.querySelector('.button') as HTMLButtonElement;
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should render with type submit', () => {
    render(<Button type="submit">Submit</Button>);
    const button = document.querySelector('.button') as HTMLButtonElement;
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('should render with type reset', () => {
    render(<Button type="reset">Reset</Button>);
    const button = document.querySelector('.button') as HTMLButtonElement;
    expect(button).toHaveAttribute('type', 'reset');
  });

  it('should render with disabled prop', () => {
    render(<Button disabled>Disabled</Button>);
    const button = document.querySelector('.button') as HTMLButtonElement;
    expect(button).toBeDisabled();
  });

  it('should render with children', () => {
    const children = 'Hello World';
    render(<Button>{children}</Button>);
    const button = document.querySelector('.button') as HTMLButtonElement;
    expect(button).toHaveTextContent(children);
  });

  it('should handle onClick event', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>On Click</Button>);
    const button = document.querySelector('.button') as HTMLButtonElement;
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
