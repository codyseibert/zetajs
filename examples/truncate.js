//
// function truncateString(str, num) {
//   if (num >= str.length) return str;
//   return [str.substring(0, num)]
//     .map(function(word) {
//       if (num < 3) {
//         return word + '...';
//       } else {
//         return word.substring(0, word.length - 3) + '...';
//       }
//     })[0];
// }
//
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

let Z = require('../index');

Z(["A-tisket a-tasket A green and yellow basket", 11])
  .when(([w, l]) => l > w.length, ([w, l]) =>
    w
  )
  .when(([w, l]) => l <= w.length, ([w, l]) =>
    Z(w)
      .substring(0, l)
      .when(l > 3, (w) => w.substring(0, w.length - 3))
      .append('...')
      .value
  )
  .log()