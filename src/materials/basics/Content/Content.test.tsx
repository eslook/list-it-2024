import React from 'react';
import { render, screen } from 'test-utils';
import '@testing-library/jest-dom';
import Content from './Content';

describe('Content Basic', () => {
  it('renders with default props', () => {
    const { container } = render(<Content />);
    expect(container).toBeInTheDocument();
  });

  it('renders with default class', () => {
    const { container } = render(<Content />);
    expect(container.firstElementChild).toHaveClass('content');
  });

  it('renders with a custom element', () => {
    render(<Content element="section" />);
    const element = document.querySelector('section.content');
    expect(element).toBeTruthy();
  });

  it('renders with dangerouslySetInnerHTML when value is provided', () => {
    const htmlContent = '<p>Test HTML Content</p>';
    render(<Content value={htmlContent} />);
    const element = document.querySelector('div.content');
    expect(element).toBeTruthy();
    expect(element?.innerHTML).toBe(htmlContent);
  });

  it('renders children', () => {
    render(
      <Content>
        <p>Test Children Content</p>
      </Content>
    );
    const childElement = screen.getByText('Test Children Content');
    expect(childElement).toBeInTheDocument();
  });

  it('prioritizes value over children when both are provided', () => {
    const htmlContent = '<p>Test HTML Content</p>';
    render(
      <Content value={htmlContent}>
        <p>Test Children Content</p>
      </Content>
    );
    const element = document.querySelector('div.content');
    expect(element?.innerHTML).toBe(htmlContent);
    expect(screen.queryByText('Test Children Content')).not.toBeInTheDocument();
  });

  it('renders default class and provided additional class ', () => {
    const { container } = render(<Content className="additional-class" />);
    const element = container.firstElementChild;
    expect(element).toHaveClass('content');
    expect(element).toHaveClass('additional-class');
  });
});
