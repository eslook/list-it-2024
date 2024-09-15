import type { Preview } from '@storybook/react';
import React from 'react';
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
      return <div className={darkerGrotesqueClassName}>{Story()}</div>;
    },
  ],
};

export default preview;
