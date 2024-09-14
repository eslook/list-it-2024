'use client';

import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';

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
    <>
      <p>{t('title')}</p>
      <button onClick={() => reset()}>{t('tryAgain')}</button>
    </>
  );
};

export default Error;
