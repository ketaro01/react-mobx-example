module.exports = {
  stories: ['../**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-docs/react/preset',
  ],
  webpackFinal: async config => {
    // do mutation to the config

    return config;
  },
};
