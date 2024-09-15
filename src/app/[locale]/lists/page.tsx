import React from 'react';
import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';
import ListsOverview from '@/materials/structures/ListsOverview';
import { getLists } from '@/utils/api';
import { Metadata, ResolvingMetadata } from 'next';

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
    namespace: 'page.lists',
  });
  const parentTitle = (await parent).title?.absolute;
  const titles = [t('title'), parentTitle].filter(Boolean);

  return {
    title: titles.join(' | '),
  };
}

export default async function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  // Passing the initialLists rather than listsPromise as
  // we're using SWR for this since the lists is modified by the user in the UI
  const initialLists = await getLists();

  return <ListsOverview initialLists={initialLists} />;
}
