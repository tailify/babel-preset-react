'use strict';

const babel = require('@babel/core');

test('should not contain invalid rules', () => {
  const result = babel.transform('<Foo bar="baz" />', {
    babelrc: false,
    presets: ['./lib/index.js'],
    sourceType: 'script',
  });

  expect(result).toBeTruthy();
  expect(result.code).toMatchSnapshot();
});
