import React from 'react';
import { render, screen, fireEvent, within, waitFor } from 'test-utils';
import '@testing-library/jest-dom';
import ItemsOverview from './ItemsOverview';
import db from 'db';

// Mock the react use function for the promises
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  use: jest.fn(),
}));
// Explicit check for the translation key and options
const translation = (key: string, options?: object) =>
  `${key}-${JSON.stringify(options)}`;
// Mock the next-intl useTranslations function for the translations
jest.mock('next-intl', () => ({
  ...jest.requireActual('next-intl'),
  useTranslations: () => (key: string, options: object) =>
    translation(key, options),
}));
// Mock the debounce function
jest.mock('@/utils/debounce', () => ({
  debounce: jest.fn(fn => fn),
}));

const mockItems: ApiProduct[] = db.products;
const itemsPromise = Promise.resolve(mockItems);

const renderItemsOverview = () =>
  render(<ItemsOverview itemsPromise={itemsPromise} />);

describe('ItemsOverview Structure', () => {
  beforeEach(() => {
    const use = require('react').use;
    use.mockImplementation((promise: Promise<ApiProduct[]>) => mockItems);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { container } = renderItemsOverview();
    expect(container).toBeInTheDocument();
  });

  it('renders items', () => {
    renderItemsOverview();
    mockItems.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  test('filters items based on search input', async () => {
    render(<ItemsOverview itemsPromise={Promise.resolve(mockItems)} />);
    // All items visible
    mockItems.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText(
      translation('search.placeholder')
    );
    fireEvent.change(searchInput, { target: { value: mockItems[0].name } });

    await waitFor(() => {
      mockItems.forEach((item, index) => {
        if (index === 0) {
          expect(screen.getByText(item.name)).toBeInTheDocument();
        } else {
          expect(screen.queryByText(item.name)).not.toBeInTheDocument();
        }
      });
    });
  });

  test('debounces search input', async () => {
    const { debounce } = require('@/utils/debounce');
    render(<ItemsOverview itemsPromise={Promise.resolve(mockItems)} />);

    const searchInput = screen.getByPlaceholderText(
      translation('search.placeholder')
    );
    fireEvent.change(searchInput, { target: { value: 'Test' } });

    await waitFor(() => {
      expect(debounce).toHaveBeenCalled();
    });
  });
});
