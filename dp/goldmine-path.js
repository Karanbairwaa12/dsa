let pathWithMaximumGold = function (gold) {
	let row = gold.length;
	let col = gold[0].length;
	let dp = Array.from({ length: gold.length }, () =>
		Array(gold[0].length).fill(0),
	);
	// console.log(gold, dp);
	for (let i = 0; i < gold.length; i++) {
		dp[i][gold[0].length - 1] = gold[i][gold[0].length - 1];
	}
	for (j = col - 2; j >= 0; j--) {
		for (let i = 0; i < row; i++) {
			if(i === 0) {
				dp[i][j] = Math.max(dp[i][j+1], dp[i+1][j+1]) + gold[i][j]
			}else if(i === row -1) {
				dp[i][j] = Math.max(dp[i][j+1], dp[i-1][j+1]) + gold[i][j]
			}else {
				dp[i][j] = Math.max(dp[i][j+1], dp[i-1][j+1], dp[i+1][j+1]) + gold[i][j]
			}
		}
	}
	let max =0;
	for (let i = 0; i < gold.length; i++) {
		max = Math.max(max, dp[i][0])
	}
	console.log(dp, max)
};

pathWithMaximumGold([
	[0, 1, 4, 2, 8, 2],
	[4, 3, 6, 5, 0, 4],
	[1, 2, 4, 1, 4, 6],
	[2, 0, 7, 3, 3, 2],
	[3, 1, 5, 9, 2, 4],
	[2, 7, 0, 8, 5, 1],
]);
