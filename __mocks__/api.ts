// __mocks__/api.js
import db from 'db';

const localdb = Object.assign({}, db);

/**
 * Exported methods for interacting with the API.
 */

export const getItems = async (): Promise<ApiProduct[]> => {
  return localdb.products;
};

export const getItem = async (id: number): Promise<ApiProduct> => {
  const item = localdb.products.find(product => product.id === id);
  if (!item) throw new Error('Item not found');
  return new Promise(resolve => resolve(item));
};

export const getLists = async (): Promise<ApiWishlist[]> => {
  return localdb.wishlists;
};

export const getList = async (id: number): Promise<ApiWishlist> => {
  const list = localdb.wishlists.find(list => list.id === id);
  if (!list) throw new Error('List not found');
  return new Promise(resolve => resolve(list));
};

export const createList = async (newListName: string): Promise<void> => {
  if (newListName.length === 0) throw new Error('List name cannot be empty');
  localdb.wishlists.push({ id: Date.now(), name: newListName, products: [] });
  return new Promise(resolve => resolve());
};

export const updateList = async (data: ApiWishlist): Promise<void> => {
  const index = localdb.wishlists.findIndex(list => list.id === data.id);
  localdb.wishlists[index] = data;
  return new Promise(resolve => resolve());
};

export const deleteList = async (listId: number) => {
  const index = localdb.wishlists.findIndex(list => list.id === listId);
  localdb.wishlists.splice(index, 1);
};

export const addItemToList = async ({
  itemId,
  listId,
}: {
  itemId: number;
  listId: number;
}) => {
  const list = await getList(listId);
  if (!list.products.includes(itemId)) list.products.push(itemId);
  updateList(list);
};

export const removeItemFromList = async ({
  itemId,
  listId,
}: {
  itemId: number;
  listId: number;
}) => {
  const list = await getList(listId);
  list.products = list.products.filter((id: number) => id !== itemId);
  updateList(list);
};
