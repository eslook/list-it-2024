'use client';

import { use } from 'react';
import { useTranslations } from 'next-intl';

interface ItemOverviewProps {
  itemPromise: Promise<ApiProduct>;
}

const ItemOverview: React.FC<ItemOverviewProps> = ({ itemPromise }) => {
  const t = useTranslations('page.item');
  const item = use(itemPromise);
  return (
    <>
      <h1>{t('title')}</h1>
      <p>{item.name}</p>
    </>
  );
};

export { ItemOverview };
