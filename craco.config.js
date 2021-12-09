const CracoLessPlugin = require('craco-less');


module.exports = {
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // Button
              "@btn-font-weight": "400",
              "@btn-border-radius-base": "@border-radius-base",
              "@btn-border-radius-sm": "@border-radius-base",
              "@btn-border-width": "@border-width-base",
              "@btn-border-style": "@border-style-base",
              "@btn-shadow": "0 2px 0 rgba(0, 0, 0, 0.015)",
              "@btn-primary-shadow": "0 2px 0 rgba(0, 0, 0, 0.045)",
              "@btn-text-shadow": "0 -1px 0 rgba(0, 0, 0, 0.12)",

              "@btn-primary-color": "#fff",
              "@btn-primary-bg": "@primary-color",

              "@btn-default-color": "@text-color",
              "@btn-default-bg": "@component-background",
              "@btn-default-border": "@border-color-base",

              "@btn-danger-color": "#fff",
              "@btn-danger-bg": "@error-color",
              "@btn-danger-border": "@error-color",

              "@btn-disable-color": "@disabled-color",
              "@btn-disable-bg": "@disabled-bg",
              "@btn-disable-border": "@border-color-base",

              "@btn-default-ghost-color": "@component-background",
              "@btn-default-ghost-bg": "transparent",
              "@btn-default-ghost-border": "@component-background",

              "@btn-font-size-lg": "@font-size-lg",
              "@btn-font-size-sm": "@font-size-base",
              "@btn-padding-horizontal-base": "@padding-md - 1px",
              "@btn-padding-horizontal-lg": "@btn-padding-horizontal-base",
              "@btn-padding-horizontal-sm": "@padding-xs - 1px",

              "@btn-height-base": "@height-base",
              "@btn-height-lg": "@height-lg",
              "@btn-height-sm": "@height-sm",

              "@btn-line-height": "@line-height-base",

              "@btn-circle-size": "@btn-height-base",
              "@btn-circle-size-lg": "@btn-height-lg",
              "@btn-circle-size-sm": "@btn-height-sm",

              "@btn-square-size": "@btn-height-base",
              "@btn-square-size-lg": "@btn-height-lg",
              "@btn-square-size-sm": "@btn-height-sm",
              "@btn-square-only-icon-size": "@font-size-base + 2px",
              "@btn-square-only-icon-size-sm": "@font-size-base",
              "@btn-square-only-icon-size-lg": "@btn-font-size-lg + 2px",

              "@btn-group-border": "@primary-5",

              "@btn-link-hover-bg": "transparent",
              "@btn-text-hover-bg": "rgba(0, 0, 0, 0.018)",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
