let interLeaving = function (s, t, u) {
	let s1 = s + t;
	let s2 = u;
	let dp = Array.from({ length: s1.length + 1 }, () =>
		Array(s2.length + 1).fill(-1),
	);
	let recursion = function (m, n) {
		if(s1.length <= s2.length) {
            if(n === 0) return 1;
            if(m === 0) return 0
        }else {
            if(m === 0) return 1;
            if(n === 0) return 0
        }
		if (dp[m][n] !== -1) return dp[m][n];
		let val = recursion(m - 1, n);
		if (s1[m - 1] == s2[n - 1]) {
			val = val + recursion(m - 1, n - 1);
		}
		dp[m][n] = val;
		return val;
	};
	console.log(recursion(s1.length, s2.length));
	return recursion(s1.length, s2.length);
};
let s = "aabcc";
let t = "dbbca";
let u = "aadbbcbcac";
interLeaving(s, t, u);
