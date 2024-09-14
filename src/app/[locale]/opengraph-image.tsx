import { ImageResponse } from 'next/og';
import { getTranslations } from 'next-intl/server';

export default async function OpenGraphImage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'meta' });

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          margin: '0 auto',
        }}>
        <p>{t('opengraph')}</p>
      </div>
    )
  );
}
