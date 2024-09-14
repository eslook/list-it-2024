'use client';

import { use, useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import {
  getLists,
  createList,
  deleteList,
  removeItemFromList,
} from '@/utils/api';
interface ListsOverviewProps {
  listsPromise: Promise<ApiWishlist[]>;
}

const ListsOverview: React.FC<ListsOverviewProps> = ({ listsPromise }) => {
  const t = useTranslations('page.lists');
  const [lists, setLists] = useState<ApiWishlist[]>(use(listsPromise));
  const [newListName, setNewListName] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewListName(event.target.value);
  };

  const getUpdatedLists = useCallback(async () => {
    const fetchedLists = await getLists();
    setLists(fetchedLists);
  }, []);

  const handleCreateList = async () => {
    await createList(newListName);
    setNewListName(''); // Clear the input after creating the list
    getUpdatedLists();
  };

  const handleDeleteList = async (listId: number) => {
    await deleteList(listId);
    getUpdatedLists();
  };

  const handleRemoveItemFromList = async ({
    itemId,
    listId,
  }: {
    itemId: number;
    listId: number;
  }) => {
    await removeItemFromList({ itemId, listId });
    getUpdatedLists();
  };

  return (
    <>
      <h1>{t('title')}</h1>

      <label htmlFor="create">{t('create.label')}</label>
      <input
        id="create"
        type="text"
        placeholder={t('create.placeholder')}
        value={newListName}
        onChange={handleInputChange}
      />
      <button disabled={newListName.length === 0} onClick={handleCreateList}>
        Create list
      </button>

      <ul>
        {lists.map((list: ApiWishlist) => (
          <li key={list.id}>
            {list.name}
            <button onClick={() => handleDeleteList(list.id)}>
              Delete list
            </button>
            <ul>
              {list.products.map((itemId: number) => (
                <li key={itemId}>
                  <Link href={`/item/${itemId}`}>{itemId}</Link>
                  <button
                    onClick={() =>
                      handleRemoveItemFromList({
                        itemId: itemId,
                        listId: list.id,
                      })
                    }>
                    Remove item
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export { ListsOverview };
