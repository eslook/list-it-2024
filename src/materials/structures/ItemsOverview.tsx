import { use } from 'react';
import { useTranslations } from 'next-intl';

interface ItemsOverviewProps {
  itemsPromise: Promise<ApiProduct[]>;
}

const ItemsOverview: React.FC<ItemsOverviewProps> = ({ itemsPromise }) => {
  const t = useTranslations('page.items');
  const items = use(itemsPromise);
  return (
    <>
      <h1>{t('title')}</h1>
      <ul>
        {items.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export { ItemsOverview };
