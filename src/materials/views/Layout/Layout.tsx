import React from 'react';
import styles from './layout.module.scss';
import { darkerGrotesqueClassName } from '@/utils/googleFontClassNames';
import Header from '@/materials/structures/Header';
import Footer from '@/materials/structures/Footer';

interface LayoutProps {
  /**
   * The content of the layout
   */
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={[styles.layout, darkerGrotesqueClassName].join(' ')}>
      <Header />
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
      <main id="main-content" className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
