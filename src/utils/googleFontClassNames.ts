import { Darker_Grotesque } from 'next/font/google';

const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  fallback: ['sans-serif'],
});

export const darkerGrotesqueClassName = darkerGrotesque.className;
