'use client';

import React, { use, useCallback, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { debounce } from '@/utils/debounce';
import Link from '@/materials/basics/Link';
import Image from '@/materials/basics/Image';
import Title from '@/materials/basics/Title';
import HGroup from '@/materials/basics/HGroup';
import Hero from '@/materials/components/Hero';
import CardList from '@/materials/components/CardList/CardList';

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearchChange = useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    }, 300),
    []
  );

  const renderMessage = useCallback(() => {
    if (searchTerm.length === 0) {
      return <p>{t('allItems', { amount: filteredItems.length })}</p>;
    }

    if (filteredItems.length === 0) {
      return <p>{t('noResults', { keyword: searchTerm })}</p>;
    }

    return (
      <p>
        {t('results', {
          keyword: searchTerm,
          amount: filteredItems.length,
        })}
      </p>
    );
  }, [t, searchTerm, filteredItems]);

  return (
    <>
      <Hero>
        <>
          <HGroup isReversed={true}>
            <Title size={1} element="h2" value={t('title')} />
          </HGroup>

          <label htmlFor="search">{t('search.label')}</label>
          <input
            id="search"
            type="search"
            placeholder={t('search.placeholder')}
            onChange={handleSearchChange}
          />

          {renderMessage()}
        </>
      </Hero>

      <CardList>
        {filteredItems.map((item: any) => (
          <div key={item.id}>
            <Image src={item.image} alt="" width={250} height={250} />
            <Link key={item.id} href={`/item/${item.id}`}>
              {item.name}
            </Link>
          </div>
        ))}
      </CardList>
    </>
  );
};

export default ItemsOverview;
