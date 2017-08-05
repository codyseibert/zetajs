
let Z = require('../index');

const n = 5;
Z()
  .grid(n, n)
  .scope(grid => {
    let i = 0;
    let j = 0;
    let di = 0;
    let dj = 1;
    Z()
      .range(1, 26)
      .each((v) => {
        grid[i][j] = v;
        if (
          i + di === n || 
          j + dj === n ||
          j + dj === -1 ||
          grid[i + di][j + dj]
        ) {
          const tmp = di;
          di = dj;
          dj = -tmp;
        }
        i += di;
        j += dj;
      })
    return grid;
  })
  .log()