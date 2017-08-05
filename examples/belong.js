
// function getIndexToIns(arr, num) {
//   arr.sort((function(a, b) {
//     return a - b;
//   }));
  
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] >= num) return i;
//   }
//   return arr.length;
// }


// getIndexToIns([5, 3, 20, 3], 5);

let Z = require('../index');

Z([5, 3, 20, 3])
  .scope(n => 
    Z(n).sort()
    .indexOf(a => a > 500)
    .convert(-1, n.length)
    .value
  )
  .log()
