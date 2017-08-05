
let Z = require('../index');

Z(["Mary", "Army"])
  .toLowerCase()
  .split()
  .reverse()
  .difference()
  .isEmpty()
  .log()