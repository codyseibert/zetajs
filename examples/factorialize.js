
let Z = require('zetajs');

Z(5, true)
  .recur((d, r) => (d === 1) ? 1 : d * r(d - 1, r))
