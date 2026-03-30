/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
	let m = grid.length;
	let n = grid[0].length;
	let visited = Array.from({ length: m }, () => Array(n).fill(-1));

	let travers = function (i, j) {
		if (
			i < 0 ||
			i >= m ||
			j < 0 ||
			j >= n ||
			grid[i][j] === 0
		) {
			return;
		}
		visited[i][j] = 1;
        
		let right = travers(i, j + 1);
		let bottom = travers(i + 1, j);
		let left = travers(i, j - 1);
		let top = travers(i - 1, j);
        let best = Math.max(left, right, bottom,top)
		visited[i][j] = -1;

        return grid[i][j] + best;
	};
	let max = 0;
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] !== 0) {
                let val = travers(i, j)
                max = Math.max(max, val)
			}
		}
	}
	return max;
};
