import React from 'react';
import { render } from 'test-utils';
import '@testing-library/jest-dom';
import Layout from './Layout';

describe('Layout View', () => {
  const renderLayout = () =>
    render(
      <Layout>
        <p>Hello World</p>
      </Layout>
    );

  it('renders without crashing', () => {
    const { container } = renderLayout();
    expect(container).toBeInTheDocument();
  });

  it('renders with default class', () => {
    const { container } = renderLayout();
    expect(container.firstElementChild).toHaveClass('layout');
  });

  it('renders children', () => {
    const { getByText } = renderLayout();
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  it('renders with default class', () => {
    renderLayout();
    expect(document.querySelector('.layout')).toBeInTheDocument();
  });

  it('renders a noscript tag', () => {
    renderLayout();
    expect(document.querySelector('noscript')).toBeInTheDocument();
  });

  it('renders main wat main-content id', () => {
    renderLayout();
    expect(document.querySelector('#main-content')).toBeInTheDocument();
  });
});
