import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  unstable_setRequestLocale,
  getTranslations,
} from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Layout from '@/materials/views/Layout';

export async function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // const t = await getTranslations({locale, namespace: 'Metadata'});
  const t = await getTranslations({ locale });

  return {
    title: t('page.home.title'),
    description: t('page.home.title'),
  };
}

const RootLayout: React.FC<
  Readonly<{
    children: React.ReactNode;
    params: { locale: string };
  }>
> = async ({ children, params: { locale } }) => {
  unstable_setRequestLocale(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
