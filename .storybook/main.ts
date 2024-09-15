import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
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
    NEXT_PUBLIC_API_HOST: '', // followed up by staticDirs accepting ../api/public
  }),
  webpackFinal: async config => {
    if (!config.resolve) config.resolve = {};
    if (!config.resolve.alias) config.resolve.alias = {};
    // Mocking API requests in Storybook
    config.resolve.alias['@/utils/api'] = require.resolve('../__mocks__/api');
    return config;
  }
};
export default config;
