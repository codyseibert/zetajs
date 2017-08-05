
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