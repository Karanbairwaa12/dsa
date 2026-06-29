var rottenOrange = function (grid) {
	let dir = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];
	let qu = [];

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] == 2) {
				qu.push([i, j]);
				grid[i][j] = 3;
			}
		}
	}
	let count = 0;
	while (qu.length > 0) {
		let size = qu.length;
		let isChange = false;
		for (let k = 0; k < size; k++) {
			let [x, y] = qu.shift();
			for (let it of dir) {
				let nx = x + it[0];
				let ny = y + it[1];
				if (
					nx >= 0 &&
					nx < grid.length &&
					ny >= 0 &&
					ny < grid[0].length &&
					grid[nx][ny] == 1
				) {
					qu.push([nx, ny]);
					grid[nx][ny] = 3;
					isChange = true;
				}
			}
		}
		if (isChange) count++;
	}

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] == 1) {
				// console.log(grid, i, j);
				return -1;
			}
		}
	}
	return count;
	// console.log(grid, count);
};

// let grid = [
// 	[2, 1, 1, 0, 0],
//     [1, 1, 0, 0, 0],
//     [0, 1, 1, 0, 0],
//     [0, 0, 0, 2, 1],
//     [0, 0, 0, 1, 1],
// ];
let grid = [
	[2, 1, 1],
	[1, 1, 1],
	[0, 1, 2],
];

rottenOrange(grid);
