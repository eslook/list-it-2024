import React from 'react';
import { useTranslations } from 'next-intl';
import MetaPageBlock from '@/materials/structures/MetaPageBlock';

export default function Page() {
  const t = useTranslations('page.notFound');
  return (
    <MetaPageBlock
      title={t('title')}
      description={t('description')}
      action={t('action')}
      code="404"
    />
  );
}
