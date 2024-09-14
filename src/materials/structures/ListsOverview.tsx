import { use } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

interface ListsOverviewProps {
  listsPromise: Promise<ApiWishlist[]>;
}

const ListsOverview: React.FC<ListsOverviewProps> = ({ listsPromise }) => {
  const t = useTranslations('page.lists');
  const lists = use(listsPromise);
  return (
    <>
      <h1>{t('title')}</h1>
      <ul>
        {lists.map((list: ApiWishlist) => (
          <li key={list.id}>
            {list.name}
            <Link key={list.id} href={`/list/${list.id}`}>
              {list.id}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export { ListsOverview };
