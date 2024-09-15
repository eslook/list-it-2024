import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';
import ItemsOverview from '@/materials/structures/ItemsOverview';
import { getItems } from '@/utils/api';

export default async function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const itemsPromise = getItems();

  return <ItemsOverview itemsPromise={itemsPromise} />;
}
