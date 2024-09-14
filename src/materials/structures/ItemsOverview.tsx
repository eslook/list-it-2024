'use client';

import { use, useCallback, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { debounce } from '@/utils/debounce';

interface ItemsOverviewProps {
  itemsPromise: Promise<ApiProduct[]>;
}

const ItemsOverview: React.FC<ItemsOverviewProps> = ({ itemsPromise }) => {
  const t = useTranslations('page.items');
  const items = use(itemsPromise);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    return items.filter((item: ApiProduct) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  const handleSearchChange = useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    }, 300),
    []
  );

  return (
    <>
      <h1>{t('title')}</h1>
      <label htmlFor="search">{t('search.label')}</label>
      <input
        id="search"
        type="search"
        placeholder={t('search.placeholder')}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredItems.map((item: any) => (
          <li key={item.id}>
            <Link key={item.id} href={`/item/${item.id}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export { ItemsOverview };
