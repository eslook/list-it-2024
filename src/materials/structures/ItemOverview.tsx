'use client';

import { use, useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { getLists, addItemToList, removeItemFromList } from '@/utils/api';

interface ItemOverviewProps {
  itemPromise: Promise<ApiProduct>;
  listsPromise: Promise<ApiWishlist[]>;
}

const ItemOverview: React.FC<ItemOverviewProps> = ({
  itemPromise,
  listsPromise,
}) => {
  const t = useTranslations('page.item');
  const item = use(itemPromise);
  const [lists, setLists] = useState<ApiWishlist[]>(use(listsPromise));

  const getUpdatedLists = useCallback(async () => {
    const fetchedLists = await getLists();
    setLists(fetchedLists);
  }, []);

  const handleAddItemToList = async ({ listId }: { listId: number }) => {
    await addItemToList({ itemId: item.id, listId });
    getUpdatedLists();
  };

  const handleRemoveItemFromList = async ({ listId }: { listId: number }) => {
    await removeItemFromList({ itemId: item.id, listId });
    getUpdatedLists();
  };

  return (
    <>
      <h1>{t('title')}</h1>

      <ul>
        {lists.map(list => (
          <li key={list.id}>
            {list.name}
            <button
              disabled={list.products.includes(item.id)}
              onClick={() =>
                handleAddItemToList({
                  listId: list.id,
                })
              }>
              {t('addToList')}
            </button>
            <button
              disabled={!list.products.includes(item.id)}
              onClick={() =>
                handleRemoveItemFromList({
                  listId: list.id,
                })
              }>
              {t('removeFromList')}
            </button>
          </li>
        ))}
      </ul>

      <p>{item.name}</p>
      <p>{item.brand}</p>
      <p>{item.category}</p>
      <Image src={item.image} alt="" width={600} height={600} />
      <p>{t('specifications.title')}</p>
      <dl>
        <dt>{t('specifications.processor')}</dt>
        <dd>{item.specifications.processor}</dd>
        <dt>{t('specifications.ram')}</dt>
        <dd>{item.specifications.ram}</dd>
        <dt>{t('specifications.storage')}</dt>
        <dd>{item.specifications.storage}</dd>
      </dl>
    </>
  );
};

export { ItemOverview };
