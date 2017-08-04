
let Z = require('zetajs');

Z("race _car", true)
  .replace(/[^a-zA-Z\d]/g, '')
  .branch('original')
    .end()
  .branch('reversed')
    .split()
    .reverse()
    .join()
    .end()
  .converge('original', 'reversed')
  .transform(([n, r]) => n === r);
