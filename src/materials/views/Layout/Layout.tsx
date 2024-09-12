import React from 'react';
import styles from './layout.module.scss';
import localFont from 'next/font/local';

const geistSans = localFont({
  src: '../../../app/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../../../app/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

interface LayoutProps {
  /**
   * The content of the layout
   */
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className={[styles.layout, geistSans.variable, geistMono.variable].join(
        ' '
      )}>
      <main id="main-content" className={styles.main}>
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
