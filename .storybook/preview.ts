import type { Preview } from '@storybook/react';
import '@/styles/globals.scss';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
