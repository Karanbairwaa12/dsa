const hightBillboard = function (m, pt, rev, dis) {
	let dp = new Array(m + 1).fill(0);

	let k = 0;
	for (let i = 1; i < dp.length; i++) {
		if (i === pt[k]) {
			if (i - dis - 1 >= 0 && dp[i - 1] < dp[i - dis - 1] + rev[k]) {
				dp[i] = dp[i - dis - 1] + rev[k];
			} else {
				if (i - dis - 1 < 0) {
					dp[i] = rev[k];
				} else {
					dp[i] = dp[i - 1];
				}
			}
			k++;
		} else {
			dp[i] = dp[i - 1];
		}
	}
	console.log(dp);
};

hightBillboard(20, [1, 6, 8, 12, 14, 16], [1, 5, 8, 5, 3, 1], 3);
