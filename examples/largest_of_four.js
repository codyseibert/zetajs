
// function largestOfFour(arr) {
//   return arr.reduce(function(acc, nums) {
//     return acc.concat(
//       nums.reduce(function(max, num) {
//         return Math.max(max, num);
//       })
//     );
//   }, []);
// }

let Z = require('zetajs');

Z([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]], true)
  .map(a => Z(a).max().value)
  .flatten()
