import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  unstable_setRequestLocale,
  getTranslations,
} from 'next-intl/server';
import { routing, getDirection } from '@/i18n/routing';
import Layout from '@/materials/views/Layout';
import '@/styles/globals.scss';

export async function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    metadataBase: new URL(String(process.env.APP_HOST)),
    title: t('title'),
    description: t('description'),
    authors: { name: '/humans.txt' },
    icons: {
      icon: [new URL('/favicon.ico', process.env.NEXT_PUBLIC_API_HOST)],
    },
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const dir = getDirection(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={dir}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
