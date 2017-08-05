
let Z = require('../index');

Z([false, null, 0, NaN, undefined, ""])
  .isTruthy()
  .log()