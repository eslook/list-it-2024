import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import Title from '@/materials/basics/Title';
import Image from '@/materials/basics/Image';
import Link from '@/materials/basics/Link';
import SkipLink from '@/materials/basics/SkipLink';
import styles from './header.module.scss';
import Container from '@/materials/basics/Container';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const t = useTranslations('header');
  const locale = useLocale();

  return (
    <>
      <SkipLink />
      <header className={styles.header}>
        <Container className={styles['header-body']}>
          <Title element="h1" value={t('title')} isSrOnly />

          <Link href="/" title={t('goToHome')}>
            <Image
              src={`${process.env.API_HOST}/logo.svg`}
              alt={t('logoAlt')}
              width={51}
              height={60}
              priority
            />
          </Link>

          <Link href="/lists" title={t('goToLists')}>
            {t('lists')}
          </Link>

          <div className={styles['header-switcher']}>
            {routing.locales.map(cur => (
              <Link
                key={cur}
                href="/"
                locale={cur}
                isInactive={cur !== locale}
                title={t(cur === locale ? 'currentlyIn' : 'switchTo', {
                  locale: cur,
                })}>
                {t(`${cur}`)}
              </Link>
            ))}
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
