'use strict';

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = () => ({
  presets: [
    ['@tailify', { browser: true }],
    ['@babel/preset-react', { development: isDevelopment }],
  ],
});
