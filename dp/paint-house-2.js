let paintHouse = function (cost) {
	let dp = Array.from({ length: cost.length }, () =>
		Array(cost[0].length).fill(0),
	);
	let fm = Infinity;
	let sm = Infinity;
	for (let i = 0; i < cost[0].length; i++) {
		dp[0][i] = cost[0][i];

		if (cost[0][i] < fm) {
			fm = cost[0][i];
		} else if (cost[0][i] >= fm && cost[0][i] < sm) {
			sm = cost[0][i];
		}
	}
	console.log(sm, fm);

	let minVal = Infinity;
	for (let i = 1; i < cost.length; i++) {
		let nfm = Infinity;
		let nsm = Infinity;
		for (let j = 0; j < cost[0].length; j++) {
			dp[i][j] = cost[i][j] + (dp[i - 1][j] === fm ? sm : fm)

			if (dp[i][j] < nfm) {
				nfm = dp[i][j];
			} else if (dp[i][j] >= nfm && dp[i][j] < nsm) {
				nsm = dp[i][j];
			}
		}
        fm = nfm;
        sm = nsm;
	}
	console.log(fm, sm);
};
let cost = [
	[1, 5, 7, 2, 1, 4],
	[5, 8, 4, 3, 6, 1],
	[3, 2, 9, 1, 2, 3],
	[1, 2, 4, 9, 1, 7],
];
paintHouse(cost);
