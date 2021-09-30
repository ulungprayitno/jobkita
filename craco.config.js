/* eslint-disable no-undef */
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@layout-header-background': '#FFFFFF',
              '@layout-header-height': '80px',
              '@layout-header-color': '#0B3886',
              '@btn-border-radius-base': '4px',
              '@btn-border-radius-sm': '4px',
              '@btn-font-weight': '400',
              '@btn-primary-bg': '#0B3886',
              '@btn-disable-bg': '#0B388680',
              '@btn-default-ghost-bg': '#FFFFFF',
              '@link-color': '#0B3886',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
