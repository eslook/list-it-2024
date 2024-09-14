import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ItemsOverview } from '@/materials/structures/ItemsOverview';

const fetchItems = async () => {
  const response = await fetch('https://list-it-api-2024.vercel.app/products');
  if (!response.ok) {
    throw new Error('Failed to fetch items');
  }
  return response.json();
};

export default async function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const itemsPromise = fetchItems();

  return <ItemsOverview itemsPromise={itemsPromise} />;
}
