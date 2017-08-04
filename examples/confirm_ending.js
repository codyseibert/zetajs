//
// function confirmEnding(str, target) {
//   return str.substring(str.length - target.length) === target;
// }
//
// confirmEnding("Bastian", "n");


let Z = require('zetajs');

Z(["Bastian", "n"], true)
  .transform(([s, t]) => s.substring(s.length - t.length) === t)
