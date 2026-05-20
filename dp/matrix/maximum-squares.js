var maximalSquare = function (nums) {
	let row = nums.length;
	let col = nums[0].length;
	let dp = Array.from({ length: row }, () => Array(col).fill(0));
	let max = 0;
	for (let i = 0; i < row; i++) {
		dp[i][col - 1] = Number(nums[i][col - 1]);
		max = Math.max(max, dp[i][col - 1]);
	}
	for (let j = 0; j < col; j++) {
		dp[row - 1][j] = Number(nums[row - 1][j]);
		max = Math.max(max, dp[row - 1][j]);
	}
	console.log(dp, nums);

	for (let i = row - 2; i >= 0; i--) {
		for (let j = col - 2; j >= 0; j--) {
			if (Number(nums[i][j]) === 0) {
				continue;
			}
			let r = dp[i][j + 1];
			let d = dp[i + 1][j];
			let di = dp[i + 1][j + 1];
			if (r === 0 || d === 0 || di == 0) {
				dp[i][j] = 1;
			} else if (r === d && d === di && di === r) {
				console.log(i, j, r, d, di);
				dp[i][j] = r + 1;
			} else {
				
				dp[i][j] = Math.min(r, d, di)+1;
			}
			max = Math.max(max, dp[i][j]);
		}
	}
	console.log(dp, nums);
};

let mat = [
	[0, 1, 0, 1, 0, 1],
	[1, 0, 1, 0, 1, 0],
	[0, 1, 1, 1, 1, 0],
	[0, 0, 1, 1, 1, 0],
	[1, 1, 1, 1, 1, 1],
];
// let mat = [
// 	["1", "0", "1", "0", "0"],
// 	["1", "0", "1", "1", "1"],
// 	["1", "1", "1", "1", "1"],
// 	["1", "0", "0", "1", "0"],
// ];

// let mat = [
// 	["1", "1", "1", "1", "0"],
// 	["1", "1", "1", "1", "0"],
// 	["1", "1", "1", "1", "1"],
// 	["1", "1", "1", "1", "1"],
// 	["0", "0", "1", "1", "1"],
// ];
maximalSquare(mat);
