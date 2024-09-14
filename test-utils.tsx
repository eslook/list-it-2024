import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import messages from './messages/en-US.json';
import { render, RenderOptions } from '@testing-library/react';

// Provide customRender that wraps with the needed Providers
const ProviderWrapper = ({ children }: { children: React.ReactNode }) => (
  <NextIntlClientProvider locale="en-US" messages={messages}>
    {children}
  </NextIntlClientProvider>
);

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: ProviderWrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };
