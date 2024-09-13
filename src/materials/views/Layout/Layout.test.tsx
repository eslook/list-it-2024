import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from './Layout';

describe('Layout View', () => {
  it('renders without crashing', () => {
    render(
      <Layout>
        <p>Hello World</p>
      </Layout>
    );
    expect(document.querySelector('.layout')).toBeInTheDocument();
  });
});
