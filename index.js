require('babel-register');

if (process.argv[2] == "hack") {
  require('hacks.js');
} else {
  require('index.js');
}
