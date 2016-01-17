// by requiring `babel-register`, all of our successive `require`s will be Babel'd
require('babel-register')({
  extensions: ['.es6']
});
require('babel-polyfill');
require('./server.es6');
