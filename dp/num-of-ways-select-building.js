var numberOfWays = function (s) {
	let dp = Array.from({length: 2}, () => Array(s.length).fill([]));

    dp[s[0] === "0" ? 0 : 1][0] = [s[0]];
	console.log(dp);
	for (let i = 1; i < s.length; i++) {
		if (s[i] === "0") {
			// New "0" sequences: all prev "1" sequences + "0", plus standalone "0"
			dp[0][i] = [...dp[1][i - 1].map((v) => v + "0"), "0"];
			// "1" sequences unchanged
			dp[1][i] = dp[1][i - 1];
		} else {
			// New "1" sequences: all prev "0" sequences + "1", plus standalone "1"
			dp[1][i] = [...dp[0][i - 1].map((v) => v + "1"), "1"];
			// "0" sequences unchanged
			dp[0][i] = dp[0][i - 1];
		}
	}
	console.log(dp);
    const last = s.length - 1;
    const allSequences = [...dp[0][last], ...dp[1][last]];

    console.log("All valid alternating subsequences:");
    allSequences.forEach(seq => console.log(seq));
    console.log("Count:", allSequences.length);
};


numberOfWays("001101");
