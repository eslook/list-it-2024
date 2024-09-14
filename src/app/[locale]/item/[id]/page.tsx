import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ItemOverview } from '@/materials/structures/ItemOverview';

const fetchItem = async (id: string) => {
  const response = await fetch(
    `https://list-it-api-2024.vercel.app/products/${id}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch items');
  }
  return response.json();
};

export default async function Page({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) {
  unstable_setRequestLocale(locale);
  const itemPromise = fetchItem(id);
  return <ItemOverview itemPromise={itemPromise} />;
}
