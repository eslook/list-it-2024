import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ListOverview } from '@/materials/structures/ListOverview';
import { getList } from '@/utils/api';

export default async function Page({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) {
  unstable_setRequestLocale(locale);
  const listPromise = getList(Number(id));

  return <ListOverview listPromise={listPromise} />;
}
