const CracoLessPlugin = require('craco-less');
const data = require('./tokens.json');

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
              "@blue-base": `${data.global.Primary[6].value}`,
              "@blue-1": `${data.global.Primary[1].value}`,
              "@blue-2": `${data.global.Primary[2].value}`,
              "@blue-3": `${data.global.Primary[3].value}`,
              "@blue-4": `${data.global.Primary[4].value}`,
              "@blue-5": `${data.global.Primary[5].value}`,
              "@blue-6": `${data.global.Primary[6].value}`,
              "@blue-7": `${data.global.Primary[7].value}`,
              "@blue-8": `${data.global.Primary[8].value}`,
              "@blue-9": `${data.global.Primary[9].value}`,
              "@blue-10": `${data.global.Primary[10].value}`,

              "@cyan-base": `${data.global.Cyan[6].value}`,
              "@cyan-1": `${data.global.Cyan[1].value}`,
              "@cyan-2": `${data.global.Cyan[2].value}`,
              "@cyan-3": `${data.global.Cyan[3].value}`,
              "@cyan-4": `${data.global.Cyan[4].value}`,
              "@cyan-5": `${data.global.Cyan[5].value}`,
              "@cyan-6": `${data.global.Cyan[6].value}`,
              "@cyan-7": `${data.global.Cyan[7].value}`,
              "@cyan-8": `${data.global.Cyan[8].value}`,
              "@cyan-9": `${data.global.Cyan[9].value}`,
              "@cyan-10":`${data.global.Cyan[10].value}`,

              "@magenta-base": `${data.global.Magenta[6].value}`,
              "@magenta-1": `${data.global.Magenta[1].value}`,
              "@magenta-2": `${data.global.Magenta[2].value}`,
              "@magenta-3": `${data.global.Magenta[3].value}`,
              "@magenta-4": `${data.global.Magenta[4].value}`,
              "@magenta-5": `${data.global.Magenta[5].value}`,
              "@magenta-6": `${data.global.Magenta[6].value}`,
              "@magenta-7": `${data.global.Magenta[7].value}`,
              "@magenta-8": `${data.global.Magenta[8].value}`,
              "@magenta-9": `${data.global.Magenta[9].value}`,
              "@magenta-10":`${data.global.Magenta[10].value}`,

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
