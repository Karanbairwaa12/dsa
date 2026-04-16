var coinChange = function (coins, amount) {
	coins.sort((a, b) => a - b);
	let dp = new Array(amount + 1).fill("");
	// console.log(dp)
	for (let i = 0; i < coins.length; i++) {
		for (let j = coins[i]; j < dp.length; j++) {
			// console.log(j, j - coins[i], dp[j - coins[i]], dp[j - coins[i]] !== "");
			if (j - coins[i] === 0) {
                let candidate = coins[i] + ","
                if(dp[j] === "" || candidate.length < dp[j].length) {
                    dp[j] = candidate;
                }
				
			} else if (dp[j - coins[i]] !== "") {
				let candidate = dp[j - coins[i]] + coins[i] + ","
                if(dp[j] === "" || candidate.length < dp[j].length) {
                    dp[j] = candidate;
                }
			}
		}
	}
	console.log(dp);
	let get = dp[dp.length - 1];
	console.log(get, get.length, "first");
	if (get.length === 0) {
		return -1;
	}
	get = get.slice(0, get.length - 1).split(",");
	console.log(get, "hello");
};

coinChange([186, 419, 83, 408], 6249);
