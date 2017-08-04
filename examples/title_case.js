
let Z = require('zetajs');

Z("I'm a little tea pot", true)
  .match(/\w\S*/g)
  .map(m =>
    m[0].toUpperCase() + m.substring(1).toLowerCase())
  .join(' ')
