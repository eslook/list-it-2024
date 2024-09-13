import { NextRequest, NextResponse } from 'next/server';

// Available locales
const locales: string[] = ['en-US']; // Because I'm using 'donut' instead of 'doughnut'

// Get the preferred locale
// Normally based on the user's browser settings
// However this is a plain app where you either only have English,
// or eventually can also switch to Cat language.
// If that ever changes, see https://nextjs.org/docs/app/building-your-application/routing/internationalization#routing-overview
const getPreferredLocale = () => locales[0];

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If pathname already has a locale, no need to redirect
  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getPreferredLocale();
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
  ],
};
