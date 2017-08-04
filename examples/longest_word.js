
let Z = require('zetajs');

Z("The quick brown fox jumped over the lazy dog", true)
  .split(' ')
  .map(w => w.length)
  .max()
