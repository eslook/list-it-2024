import React from 'react';
import { useTranslations } from 'next-intl';
import MetaPageBlock from '@/materials/structures/MetaPageBlock';
import { Metadata, ResolvingMetadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(
  {
    params,
  }: {
    params: { locale: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'page.notFound',
  });
  const parentTitle = (await parent).title?.absolute;
  const titles = [t('title'), parentTitle].filter(Boolean);

  return {
    title: titles.join(' | '),
  };
}

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
