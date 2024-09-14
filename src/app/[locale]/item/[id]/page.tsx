import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ItemOverview } from '@/materials/structures/ItemOverview';
import { getItem } from '@/utils/api';

export default async function Page({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) {
  unstable_setRequestLocale(locale);
  const itemPromise = getItem(Number(id));
  return <ItemOverview itemPromise={itemPromise} />;
}
