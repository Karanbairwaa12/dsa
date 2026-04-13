let minimumCost = function (cost) {
	let row = cost.length-1;
	let col = cost[0].length -1;
	let dp = Array.from({length: cost.length}, () => Array(cost[0].length).fill(0))
	dp[cost.length -1][cost[0].length -1] = cost[cost.length -1][cost[0].length -1]
    for(let i = cost.length -1;i>=0;i--) {
		for(let j = cost[0].length -1;j>=0;j--) {
			if(i === row && j === col) {
				dp[i][j] = cost[i][j]
			}else if(i === row) {
				dp[i][j] = cost[i][j] + dp[i][j+1] 
			}else if(j === col) {
				dp[i][j] = cost[i][j] + dp[i+1][j]
			}else {
				dp[i][j] = Math.min(dp[i+1][j], dp[i][j+1]) + cost[i][j]
			}
		}
	}
	console.log(dp)
	return dp[0][0]
};
minimumCost(
	[
		[9, 4, 9, 9],
		[6, 7, 6, 4],
		[8, 3, 3, 7],
		[7, 4, 9, 10],
	],
	4,
);
