import MetaPageBlock from '@/materials/structures/MetaPageBlock';
import React from 'react';
import { useTranslations } from 'next-intl';

const Loading: React.FC = () => {
  const t = useTranslations('loading');

  return <MetaPageBlock title={t('title')} />;
};

export default Loading;
