const replaceOWithX = function (grid) {
  let vis = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(0),
  );

  let dir = [[1,0], [0, 1],[-1, 0], [0, -1]]
  let dfs = function(i,j) {
    if(i >=0 && i < grid.length && j >= 0 && j < grid[0].length && vis[i][j] != 1 && grid[i][j] == 'O') {
        vis[i][j] = 1;
        for(let k = 0;k<dir.length;k++) {
            let [x, y] = dir[k]
            let nx = i + x;
            let ny = j + y;
            dfs(nx, ny)
        }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!(i == 0 || i == grid.length - 1)) {
        if (j == 0 || j == grid[0].length - 1) {
          if (grid[i][j] == "O") {
            dfs(i, j);
          }
        }
      } else {
        if (grid[i][j] == "O") {
          dfs(i, j);
        }
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if(vis[i][j] == 0) {
        grid[i][j] = 'X' 
      }
    }
  }


  console.log(grid, vis);
};

let grid = [
  ["X", "X", "X", "X"],
  ["X", "O", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "O", "X", "X"],
  ["X", "X", "O", "O"],
];

replaceOWithX(grid);
