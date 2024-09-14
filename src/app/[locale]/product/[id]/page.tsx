import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

export default async function Page({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) {
  unstable_setRequestLocale(locale);
  return <p>Detail {id}</p>;
}
