import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

export default async function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <p>Home</p>;
}
