
// function repeatStringNumTimes(str, num) {
//   if (num <= 0) return '';
//   return Array(num).fill(str).join('');
// }
//
// repeatStringNumTimes("abc", 3);

let Z = require('zetajs');

Z(["abc", 3], true)
  .transform(([s, n]) => Z(s).repeat(n).value)
  .join()
