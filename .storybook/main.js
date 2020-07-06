const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.ts'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes',
    '@storybook/addon-backgrounds/register',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.stories\.ts?$/],
          include: [path.resolve(__dirname, '../src')], // You can specify directories
        },
        loaderOptions: {
          parser: 'typescript',
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
  ],
};
