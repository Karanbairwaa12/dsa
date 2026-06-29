var numIslands = function (grid) {
	let vis = Array.from({ length: grid.length }, () =>
		Array(grid[0].length).fill(0),
	);
    let count = 0;

	let dfs = function (i, j, st) {
		if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return;
		if (grid[i][j] == 0 || vis[i][j] == 1) return;

        // console.log(i,j)
		st.push(grid[i][j]);
		vis[i][j] = 1;

		while (st.length > 0) {
			let pop = st.pop();
			dfs(i + 1, j, st);
			dfs(i - 1, j, st);
			dfs(i, j - 1, st);
			dfs(i, j + 1, st);
		}
	};
    let st = []
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] != 0 && vis[i][j] != 1) {
				dfs(i, j, st);
                count++;
			}
		}
	}

    console.log(count)
};

let grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

numIslands(grid)
