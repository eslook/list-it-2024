'use client';

import { use } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

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
