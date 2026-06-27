const nearestOne = function (grid) {
  let vis = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(0),
  );
  let min = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(0),
  );
  let dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let qu = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        vis[i][j] = 1;
        qu.push([i, j]);
      }
    }
  }

  while (qu.length > 0) {
    let [i, j] = qu.shift();
    for (let d of dir) {
      let ni = i + d[0];
      let nj = j + d[1];

      if (
        ni >= 0 &&
        ni < grid.length &&
        nj >= 0 &&
        nj < grid[0].length &&
        grid[ni][nj] == 0 &&
        vis[ni][nj] == 0
      ) {
        vis[ni][nj] = 1;
        qu.push([ni, nj]);
        min[ni][nj] = min[i][j] + 1;
      }
    }
  }
  console.log(min);
};

const nearestZero = function (grid) {
  let vis = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(0),
  );
  let min = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(0),
  );
  let dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let qu = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 0) {
        vis[i][j] = 1;
        qu.push([i, j]);
      }
    }
  }

  while (qu.length > 0) {
    let [i, j] = qu.shift();
    for (let d of dir) {
      let ni = i + d[0];
      let nj = j + d[1];

      if (
        ni >= 0 &&
        ni < grid.length &&
        nj >= 0 &&
        nj < grid[0].length &&
        grid[ni][nj] == 1 && 
        vis[ni][nj] == 0
      ) {
        vis[ni][nj] = 1;
        qu.push([ni, nj]);
        min[ni][nj] = min[i][j] + 1;
      }
    }
  }
  console.log(min);
};

// let grid = [
//   [1, 0, 1],
//   [1, 1, 0],
//   [1, 0, 0],
// ];

let grid = [
  [0, 1, 0],
  [0, 0, 1],
  [0, 1, 1],
];
nearestOne(grid);
nearestZero(grid)
