import { use } from 'react';
import { useTranslations } from 'next-intl';

interface ListOverviewProps {
  listPromise: Promise<ApiProduct>;
}

const ListOverview: React.FC<ListOverviewProps> = ({ listPromise }) => {
  const t = useTranslations('page.list');
  const list = use(listPromise);

  return (
    <>
      <h1>{t('title')}</h1>
      <p>{list.name}</p>
    </>
  );
};

export { ListOverview };
