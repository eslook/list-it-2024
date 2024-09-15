import type { Preview } from '@storybook/react';
import React from 'react';
import { IntlProvider } from 'next-intl';
import messages from '../messages/en-US.json';
import { darkerGrotesqueClassName } from '@/utils/googleFontClassNames';
import '@/styles/globals.scss';
import './storybook.scss';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      return (
        <div className={darkerGrotesqueClassName}>
          <IntlProvider locale="en-US" messages={messages}>
            {Story()}
          </IntlProvider>
        </div>
      );
    },
  ],
};

export default preview;
