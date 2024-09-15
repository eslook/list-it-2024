import React from 'react';
import { useTranslations } from 'next-intl';
import { Link as NextLink } from '@/i18n/routing';
import styles from './skip-link.module.scss';

interface SkipLinkProps {}

const SkipLink: React.FC<SkipLinkProps> = ({}) => {
  const t = useTranslations('skipLink');
  return (
    <NextLink className={styles['skip-link']} href="#main-content">
      {t('content')}
    </NextLink>
  );
};

export default SkipLink;
