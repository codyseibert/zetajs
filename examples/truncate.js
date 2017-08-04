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
console.log('hi');
debugger;
Z(-1)
  .case()
    .when(n => n > 0)
      .tap(n => console.log('-------'))
      .tap(n => console.log('-------'))
      .tap(n => console.log('-------'))
      .tap(n => console.log('WTF'))
      .transform(n => 'when 1')
      .break()
    .when(n => n < 0)
      .tap(n => console.log('-------'))
      .tap(n => console.log('-------'))
      .tap(n => console.log('-------'))
      .tap(n => console.log('GG'))
      .transform(n => 'when 2')
      .break()
    .default()
      .transform(n => 'default')
      .break()
  .close()
  .log()

// Z(["A-tisket a-tasket A green and yellow basket", 200])
//   .case(([w, l]) => l > w.length)
//     .first()
//     .break()
//   .default()
//     .replace(0, ([w, l]) => w.substring(0, l))
//     .map([
//       ([w, l]) => [w.substring(0, l), l]
//     ])
