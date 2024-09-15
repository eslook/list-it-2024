import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ItemOverview } from '@/materials/structures/ItemOverview';
import { getItem, getLists } from '@/utils/api';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata(
  {
    params,
  }: {
    params: { id: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const item = await getItem(Number(params.id));
    const parentTitle = (await parent).title?.absolute;
    const titles = [item.name, parentTitle].filter(Boolean);

    return {
      title: titles.join(' | '),
      openGraph: {
        images: [item.image],
      },
    };
  } catch (error) {
    notFound();
  }
}

export default async function Page({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) {
  unstable_setRequestLocale(locale);
  const itemPromise = getItem(Number(id));
  const listsPromise = getLists();

  return <ItemOverview itemPromise={itemPromise} listsPromise={listsPromise} />;
}
