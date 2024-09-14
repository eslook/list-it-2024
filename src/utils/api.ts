/**
 * Make call to the API, with specified endpoint, method and body.
 *
 * @param {Object} params - The parameters for the API call
 * @param {string} params.endpoint - The endpoint to which the API call is made
 * @param {string} params.method - The HTTP method to use for the API call (e.g., 'GET', 'POST')
 * @param {any} params.body - The body of the request, which will be stringified to JSON
 *
 * @returns {Promise<any>} - A promise that resolves to the JSON response from the API.
 *
 * @throws {Error} - Throws an error if the API call fails.
 */
const makeCall = async ({
  endpoint,
  method,
  body = null,
}: {
  endpoint: string;
  method: string;
  body: object | null;
}) => {
  const url = `https://list-it-api-2024.vercel.app/${endpoint}`;
  const response = await fetch(url, {
    method,
    body: body && JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error(`Failed ${method} to ${endpoint}`);
  }
  return response.json();
};

/**
 * Exported methods for interacting with the API.
 */

export const getItems = async (): Promise<ApiProduct[]> => {
  return makeCall({
    endpoint: `products`,
    method: 'GET',
    body: null,
  });
};

export const getItem = async (id: number): Promise<ApiProduct> => {
  return makeCall({
    endpoint: `products/${id}`,
    method: 'GET',
    body: null,
  });
};

export const getLists = async (): Promise<ApiWishlist[]> => {
  return makeCall({
    endpoint: 'wishlists',
    method: 'GET',
    body: null,
  });
};

export const getList = async (id: number): Promise<ApiWishlist> => {
  return makeCall({
    endpoint: `wishlists/${id}`,
    method: 'GET',
    body: null,
  });
};

export const createList = async (newListName: string): Promise<ApiWishlist> => {
  if (newListName.length === 0) throw new Error('List name cannot be empty');
  return makeCall({
    endpoint: 'wishlists',
    method: 'POST',
    body: { name: newListName, products: [] },
  });
};

export const updateList = async (data: ApiWishlist): Promise<ApiWishlist> => {
  return makeCall({
    endpoint: `wishlists/${data.id}`,
    method: 'PUT',
    body: data,
  });
};

export const deleteList = async (listId: number) => {
  return makeCall({
    endpoint: `wishlists/${listId}`,
    method: 'DELETE',
    body: null,
  });
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
  return updateList(list);
};
