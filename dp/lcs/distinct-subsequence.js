let ds = function (s1, s2) {
	let recursion = function (m, n) {
		if (n === 0) return 1;
		if (m === 0) return 0;
		let val = recursion(m - 1, n);
		if (s1[m - 1] == s2[n - 1]) {
			val = val + recursion(m - 1, n - 1);
		}
		return val;
	};
	console.log(recursion(s1.length, s2.length));
};

let dsMemo = function (s1, s2) {
	let dp = Array.from({ length: s1.length + 1 }, () =>
		Array(s2.length + 1).fill(-1),
	);
	let recursion = function (m, n) {
		if (n === 0) return 1;
		if (m === 0) return 0;
		if (dp[m][n] !== -1) return dp[m][n];
		let val = recursion(m - 1, n);
		if (s1[m - 1] == s2[n - 1]) {
			val = val + recursion(m - 1, n - 1);
		}
        dp[m][n] = val
		return val;
	};
    return recursion(s1.length, s2.length)
	console.log(recursion(s1.length, s2.length));
};
let s = "babgbag";
let t = "bag";

ds(s, t);
dsMemo(s, t);
