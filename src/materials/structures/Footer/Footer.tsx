import React from 'react';
import { useTranslations } from 'next-intl';
import styles from './footer.module.scss';
import Container from '@/materials/basics/Container';
import Link from '@/materials/basics/Link';
import Title from '@/materials/basics/Title';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const t = useTranslations('footer');

  return (
    <footer className={styles.footer}>
      <Container className={styles['footer-body']}>
        <Title element="h2" value={t('title')} isSrOnly />
        <Link href="/">{t('home')}</Link>
        <Link href="/lists">{t('lists')}</Link>
      </Container>
    </footer>
  );
};

export default Footer;
