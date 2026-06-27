let NumberOfEnclaves = function (grid) {
  let vis = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(0),
  );

  let dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let dfs = function (i, j) {
    if (
      i >= 0 &&
      i < grid.length &&
      j >= 0 &&
      j < grid[0].length &&
      vis[i][j] != 1 &&
      grid[i][j] == 1
    ) {
      vis[i][j] = 1;
      for (let k = 0; k < dir.length; k++) {
        let [x, y] = dir[k];
        let nx = i + x;
        let ny = j + y;
        dfs(nx, ny);
      }
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!(i == 0 || i == grid.length - 1)) {
        if (j == 0 || j == grid[0].length - 1) {
          if (grid[i][j] == 1) {
            dfs(i, j);
          }
        }
      } else {
        if (grid[i][j] == 1) {
          dfs(i, j);
        }
      }
    }
  }

  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (vis[i][j] == 0 && grid[i][j]) {
        count++;
      }
    }
  }
  console.log(grid, vis, count);
};

let NumberOfEnclavesBfs = function (grid) {
  let vis = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(0),
  );

  let dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  let bfs = function (i, j, vis, qu) {
    vis[i][j] = 1;
    qu.push([i, j]);

    while (qu.length > 0) {
      let [x, y] = qu.pop();
      for (let [a, b] of dir) {
        let bi = x + a;
        let bj = y + b;
        if (
          bi < 0 ||
          bi >= grid.length ||
          bj < 0 ||
          bj >= grid[0].length ||
          vis[bi][bj] == 1 ||
          grid[bi][bj] == 0
        )
          continue;
        vis[bi][bj] = 1;
        qu.push([bi, bj]);
      }
    }
  };

  let qu = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!(i == 0 || i == grid.length - 1)) {
        if (j == 0 || j == grid[0].length - 1) {
          if (vis[i][j] != 1 && grid[i][j] == 1) {
            bfs(i, j, vis, qu);
          }
        }
      } else {
        if (vis[i][j] != 1 && grid[i][j] == 1) {
          bfs(i, j, vis, qu);
        }
      }
    }
  }

  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (vis[i][j] == 0 && grid[i][j]) {
        count++;
      }
    }
  }
  console.log(grid, vis, count, "bfs");
};

let grid = [
  [1, 1, 0, 0, 0, 1],
  [0, 1, 1, 0, 1, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 1, 0, 1, 0, 0],
  [1, 1, 0, 0, 0, 1],
];
NumberOfEnclaves(grid);
NumberOfEnclavesBfs(grid);
