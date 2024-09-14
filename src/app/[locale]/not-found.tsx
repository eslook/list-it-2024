import React from 'react';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('page.notFound');
  return <p>{t('title')}</p>;
}
