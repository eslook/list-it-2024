import React from 'react';
import styles from './layout.module.scss';
import { darkerGrotesqueClassName } from '@/utils/googleFontClassNames';
import { Link } from '@/i18n/routing';

interface LayoutProps {
  /**
   * The content of the layout
   */
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={[styles.layout, darkerGrotesqueClassName].join(' ')}>
      <main id="main-content" className={styles.main}>
        <Link href="/" locale="me-OW">
          Switch to Cat
        </Link>
        <Link href="/" locale="en-US">
          Switch to English
        </Link>
        <Link href="/item/1">Switch to Detail 1</Link>
        <Link href="/lists">Switch to Lists</Link>

        <noscript>
          <p>
            This website works best with JavaScript enabled. Here&apos;s a{' '}
            <a
              href="https://www.enable-javascript.com/"
              target="_blank"
              rel="noopener">
              guide to help you turn it on
            </a>
            .
          </p>
        </noscript>
        {children}
      </main>
    </div>
  );
};

export default Layout;
