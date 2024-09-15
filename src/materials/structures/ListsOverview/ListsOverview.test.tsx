import React from 'react';
import { render, screen, fireEvent, within, waitFor } from 'test-utils';
import '@testing-library/jest-dom';
import ListsOverview from './ListsOverview';
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
  getLists: jest.fn(),
  createList: jest.fn(),
  deleteList: jest.fn(),
  removeItemFromList: jest.fn(),
}));

const mockLists: ApiWishlist[] = db.wishlists;
const mockListToModify = mockLists[0];
const mockItemIdToRemove = mockListToModify.products[0];

const renderListsOverview = () =>
  render(<ListsOverview initialLists={mockLists} />);

describe('ListsOverview Structure', () => {
  beforeEach(() => {
    const use = require('react').use;
    use.mockImplementation((promise: Promise<ApiWishlist[]>) => mockLists);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { container } = renderListsOverview();
    expect(container).toBeInTheDocument();
  });

  it('renders lists', () => {
    renderListsOverview();
    mockLists.forEach(list => {
      expect(screen.getByText(list.name)).toBeInTheDocument();
    });
  });

  it('calls deleteList with correct arguments once', async () => {
    const { deleteList, getLists } = require('@/utils/api');
    renderListsOverview();
    const listItem = screen.getByText(mockListToModify.name);
    const deleteButton = within(listItem).getByText('deleteList');
    fireEvent.click(deleteButton);
    await waitFor(() => {
      expect(deleteList).toHaveBeenCalledWith(mockListToModify.id);
      expect(getLists).toHaveBeenCalledTimes(1);
    });
  });

  it('calls removeItemFromList with correct arguments once', async () => {
    const { removeItemFromList, getLists } = require('@/utils/api');
    renderListsOverview();
    const list = screen.getByText(mockListToModify.name);
    const listItem = within(list)
      .getByText(mockItemIdToRemove.toString())
      .closest('li');
    if (listItem === null) {
      throw new Error('List item not found');
    }
    const addButton = within(listItem).getByText('removeItemFromList');
    fireEvent.click(addButton);
    await waitFor(() => {
      expect(removeItemFromList).toHaveBeenCalledWith({
        itemId: mockItemIdToRemove,
        listId: mockListToModify.id,
      });
      expect(getLists).toHaveBeenCalledTimes(1);
    });
  });
});
