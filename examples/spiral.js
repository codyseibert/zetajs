
let Z = require('../index');

Z(5)
.scope(n =>
  Z(n)
  .squareGrid(n)
  .scope(grid =>
    Z([
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0]
    ])
    .cycle()
    .scope(dirs => {
      let dir = dirs.next().value;
      Z()
      .range(1, n*n + 1)
      .reduce((acc, val) => {
        grid[acc.i][acc.j] = val;
        if (
          acc.i + dir[0] === n || 
          acc.j + dir[1] === n ||
          acc.j + dir[1] === -1 ||
          grid[acc.i + dir[0]][acc.j + dir[1]]
        ) dir = dirs.next().value;
        return {
          i: acc.i + dir[0], 
          j: acc.j + dir[1]
        }
      }, {
        i: 0, 
        j: 0
      })
      return grid;
    })
    .value
  )
  .value
)
.log()