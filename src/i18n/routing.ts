import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en-US', 'me-OW'],

  // Used when no locale matches
  defaultLocale: 'en-US',

  // The `pathnames` object holds pairs of internal and
  // external paths. Based on the locale, the external
  // paths are rewritten to the shared, internal ones.
  pathnames: {
    '/lists': {
      'en-US': '/lists',
      'me-OW': '/lissssts', // Because cats
    },
    '/item/[id]': {
      'en-US': '/item/[id]',
      'me-OW': '/mewtem/[id]', // Because cats
    },
  },
});

// As is well known, cats read right to left
export const getDirection = (locale: string) => {
  return locale === 'me-OW' ? 'rtl' : 'ltr';
};

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
