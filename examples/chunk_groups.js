
let Z = require('../index');

Z(["a", "b", "c", "d"])
  .chunk(2)
  .log()