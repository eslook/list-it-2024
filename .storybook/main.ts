import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: [
    '../public', // Shared assets between Storybook and Next.js, needed in production
    '../api/public', // Shared assets between Storybook and API, needed in production
  ],
  env: config => ({
    ...config,
    API_HOST: '', // followed up by staticDirs accepting ../api/public
  }),
};
export default config;
