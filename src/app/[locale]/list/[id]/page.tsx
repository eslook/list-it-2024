import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ListOverview } from '@/materials/structures/ListOverview';

const fetchItem = async (id: string) => {
  const response = await fetch(
    `https://list-it-api-2024.vercel.app/wishlists/${id}`
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
  const listPromise = fetchItem(id);

  return <ListOverview listPromise={listPromise} />;
}
