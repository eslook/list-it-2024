import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ListsOverview } from '@/materials/structures/ListsOverview';
import { getLists } from '@/utils/api';

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
