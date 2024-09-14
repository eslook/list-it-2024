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
  const listsPromise = getLists();

  return <ListsOverview listsPromise={listsPromise} />;
}
