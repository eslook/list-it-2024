import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import messages from './messages/en-US.json';
import { render, RenderOptions } from '@testing-library/react';

export const locale = 'en-US';

// Provide customRender that wraps with the needed Providers
const ProviderWrapper = ({ children }: { children: React.ReactNode }) => (
  <NextIntlClientProvider locale={locale} messages={messages}>
    {children}
  </NextIntlClientProvider>
);

// WARNING: The following warning may occur on this line and is a known bug occuring throughout the React version updates:
// "Warning: React does not recognize the `fetchPriority` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `fetchpriority` instead. If you accidentally passed it from a parent component, remove it from the DOM element."
const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: ProviderWrapper, ...options });

export * from '@testing-library/react';
export { customRender as render, messages };
