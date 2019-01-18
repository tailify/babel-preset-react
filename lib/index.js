'use strict';

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = () => ({
  plugins: [
    [
      'react-css-modules',
      {
        generateScopedName: isDevelopment ? '[local]_[hash:base64:8]' : '[hash:base64:8]',
        webpackHotModuleReloading: isDevelopment,
      },
    ],
  ],
  presets: [
    ['@tailify', { browser: true }],
    ['@babel/preset-react', { development: isDevelopment }],
  ],
});
