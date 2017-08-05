// function destroyer(arr) {
//   var args = [].slice.call(arguments);
//   var input = args[0];
//   var nums = args.slice(1);
//   return input.filter(function(n) {
//     return nums.indexOf(n) === -1;
//   });
// }

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);


let Z = require('../index');

Z([[1, 2, 3, 1, 2, 3], [2, 3]])
  .difference()
  .log()