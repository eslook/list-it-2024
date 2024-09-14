'use client';

import { useState } from 'react';
import useSWR from 'swr';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import {
  getLists,
  createList,
  deleteList,
  removeItemFromList,
} from '@/utils/api';

interface ListsOverviewProps {
  initialLists: ApiWishlist[];
}

const ListsOverview: React.FC<ListsOverviewProps> = ({ initialLists }) => {
  const t = useTranslations('page.lists');
  const { data: lists, mutate } = useSWR<ApiWishlist[]>('wishlists', getLists, {
    fallbackData: initialLists,
  });

  const [newListName, setNewListName] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewListName(event.target.value);
  };

  const handleCreateList = async () => {
    await createList(newListName);
    setNewListName(''); // Clear the input after creating the list
    mutate();
  };

  const handleDeleteList = async (listId: number) => {
    await deleteList(listId);
    mutate();
  };

  const handleRemoveItemFromList = async ({
    itemId,
    listId,
  }: {
    itemId: number;
    listId: number;
  }) => {
    await removeItemFromList({ itemId, listId });
    mutate();
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
        {t('create.button')}
      </button>

      {lists && (
        <ul>
          {lists.map(list => (
            <li key={list.id}>
              {list.name}
              <button onClick={() => handleDeleteList(list.id)}>
                {t('deleteList')}
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
                      {t('removeItemFromList')}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export { ListsOverview };
