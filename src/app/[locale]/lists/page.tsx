import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ListsOverview } from '@/materials/structures/ListsOverview';

const fetchItems = async () => {
  const response = await fetch('https://list-it-api-2024.vercel.app/wishlists');
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
  const listsPromise = fetchItems();

  return <ListsOverview listsPromise={listsPromise} />;
}
