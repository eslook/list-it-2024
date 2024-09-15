import React from 'react';
import { render, screen, fireEvent, within, waitFor } from 'test-utils';
import '@testing-library/jest-dom';
import ItemOverview from './ItemOverview';
import db from 'db';

// Mock the react use function for the promises
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  use: jest.fn(),
}));
// Mock the next-intl useTranslations function for the translations
jest.mock('next-intl', () => ({
  ...jest.requireActual('next-intl'),
  useTranslations: () => (key: string) => key, // return flat key for testing
}));
// Mock the api functions
jest.mock('@/utils/api', () => ({
  removeItemFromList: jest.fn(),
  addItemToList: jest.fn(),
  getLists: jest.fn(),
}));

const mockItem: ApiProduct = db.products[0];
const mockLists: ApiWishlist[] = db.wishlists;

// Add item to list, so we can test removing it
if (!mockLists[0].products.includes(mockItem.id))
  mockLists[0].products.push(mockItem.id);
const listToRemoveFrom = mockLists[0];
// Remove item from list, so we can test adding it
if (mockLists[1].products.includes(mockItem.id))
  mockLists[1].products.splice(mockLists[1].products.indexOf(mockItem.id), 1);
const listToAddTo = mockLists[1];

const itemPromise = Promise.resolve(mockItem);

const renderItemOverview = () =>
  render(<ItemOverview itemPromise={itemPromise} initialLists={mockLists} />);

describe('ItemOverview Structure', () => {
  beforeEach(() => {
    const use = require('react').use;
    use.mockImplementation((promise: Promise<ApiProduct>) => {
      if (promise === itemPromise) {
        return mockItem;
      }
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { container } = renderItemOverview();
    expect(container).toBeInTheDocument();
  });

  it('renders item details that are not translated', () => {
    renderItemOverview();
    expect(screen.getByText(mockItem.name)).toBeInTheDocument();
    expect(screen.getByText(mockItem.category)).toBeInTheDocument();
  });

  it('renders specifications', () => {
    renderItemOverview();
    Object.entries(mockItem.specifications).forEach(([key, value]) => {
      expect(screen.getByText(`specifications.${key}`)).toBeInTheDocument();
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  it('renders lists', () => {
    renderItemOverview();
    mockLists.forEach(list => {
      expect(screen.getByText(list.name)).toBeInTheDocument();
    });
  });

  it('calls removeItemFromList with correct arguments once', async () => {
    const { removeItemFromList, getLists } = require('@/utils/api');
    renderItemOverview();
    const listItem = screen.getByText(listToRemoveFrom.name).closest('li');
    if (!listItem) throw new Error('List item not found');
    const removeButton = within(listItem).getByText('removeFromList');
    fireEvent.click(removeButton);
    await waitFor(() => {
      expect(removeItemFromList).toHaveBeenCalledWith({
        itemId: mockItem.id,
        listId: listToRemoveFrom.id,
      });
      expect(getLists).toHaveBeenCalledTimes(1);
    });
  });

  it('calls addItemToList with correct arguments once', async () => {
    const { addItemToList, getLists } = require('@/utils/api');
    renderItemOverview();
    const listItem = screen.getByText(listToAddTo.name).closest('li');
    if (!listItem) throw new Error('List item not found');
    const addButton = within(listItem).getByText('addToList');
    fireEvent.click(addButton);
    await waitFor(() => {
      expect(addItemToList).toHaveBeenCalledWith({
        itemId: mockItem.id,
        listId: listToAddTo.id,
      });
      expect(getLists).toHaveBeenCalledTimes(1);
    });
  });

  it('renders translations correctly', () => {
    renderItemOverview();
    expect(screen.getByText('specifications.title')).toBeInTheDocument();
    expect(screen.getByText('brand')).toBeInTheDocument();
  });
});
