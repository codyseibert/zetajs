
let Z = require('../index');

Z(5)
  .squareGrid()
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
            grid[acc[0].i][acc[0].j] = acc[0].v;
            if (
                acc[0].i + dir[0] === n || 
                acc[0].j + dir[1] === n ||
                acc[0].j + dir[1] === -1 ||
                grid[acc[0].i + dir[0]][acc[0].j + dir[1]]
            ) dir = dirs.next().value;
            return [{
              v: val,
              i: acc[0].i + dir[0], 
              j: acc[0].j + dir[1]
            }].concat(acc);
          }, [{
            i: 0, 
            j: 0, 
            v: 1
          }])
        return grid;
      })
      .value
  )
  .log()