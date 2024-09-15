'use client';

import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import MetaPageBlock from '@/materials/structures/MetaPageBlock';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  const t = useTranslations('page.error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <MetaPageBlock
      title={t('title')}
      description={t('description')}
      action={t('tryAgain')}
      actionFunc={reset}
      code="500"
    />
  );
};

export default Error;
