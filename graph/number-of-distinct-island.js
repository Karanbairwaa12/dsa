const countDistinctIslands = function (grid) {
  // code here
  let vis = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(0),
  );

  let set = new Set();

  let dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let bfs = function (i, j, vis, set) {
    let qu = [];
    vis[i][j] = 1;
    qu.push([i, j]);
    let base = [[0, 0]];

    while (qu.length > 0) {
      let [x, y] = qu.shift();
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
        console.log(i, j, bi, bj);
        vis[bi][bj] = 1;
        base.push([i - bi, j - bj]);
        qu.push([bi, bj]);
      }
    }

    set.add(JSON.stringify(base));
  };

  let dfs = function (i, j, nx, ny, vis, base) {
    console.log(i,j)
    vis[i][j] = 1;
    base.push([nx - i, ny - j]);
    for (let [a, b] of dir) {
      let bi = i + a;
      let bj = j + b;
      if (
        bi < 0 ||
        bi >= grid.length ||
        bj < 0 ||
        bj >= grid[0].length ||
        vis[bi][bj] == 1 ||
        grid[bi][bj] == 0
      )
        continue;
      dfs(bi, bj, nx, ny, vis, base);
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (vis[i][j] != 1 && grid[i][j] != 0) {
        // bfs(i, j, vis, set);
        let base = [];
        dfs(i, j, i, j, vis, base);
        set.add(JSON.stringify(base))
      }
    }
  }
  console.log(set, set.size);
};

let grid = [
  [1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [1, 1, 0, 1, 0],
];
countDistinctIslands(grid);
