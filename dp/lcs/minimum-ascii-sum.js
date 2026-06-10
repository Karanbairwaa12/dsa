var minimumDeleteSum = function (s1, s2) {
	let s1D = new Array(s1.length + 1).fill(0);
	let s2D = new Array(s2.length + 1).fill(0);
	for (let i = 1; i < s1.length; i++) {
		// console.log(s1[i].codePointAt() - 'a'.codePointAt(), s1[i] - 'a')
		s1D[i] = s1D[i - 1] + s1[i - 1].codePointAt();
	}
	for (let i = 1; i < s2.length; i++) {
		// console.log(s1[i].codePointAt() - 'a'.codePointAt(), s1[i] - 'a')
		s2D[i] = s2D[i - 1] + s2[i - 1].codePointAt();
	}

	let dp = Array.from({ length: s1.length + 1 }, () =>
		Array(s2.length + 1).fill(-1),
	);
	console.log(s1D, s2D);
	let run = function (s1, s2, m, n) {
		console.log(s1, s2, m, n);
		if (m === 0) return s2D[n];
		if (n === 0) return s1D[m];

		if (dp[m][n] !== -1) return dp[m][n];
		let val = 0;
		if (s1[m - 1] == s2[n - 1]) {
			val = run(s1, s2, m - 1, n - 1);
		} else {
			val = Math.min(
				run(s1, s2, m - 1, n) + s1[m - 1].codePointAt(0),
				run(s1, s2, m, n - 1) + s2[n - 1].codePointAt(0),
			);
		}
		dp[m][n] = val;
		return val;
	};

	console.log(run(s1, s2, s1.length, s2.length));
};

let masRecursion = function (st1, st2) {
	let dp1 = new Array(st1.length + 1).fill(0);
	let dp2 = new Array(st2.length + 1).fill(0);

	for (let i = dp1.length - 2; i >= 0; i--) {
		dp1[i] = st1[i].codePointAt(0) + dp1[i + 1];
	}
	for (let i = dp2.length - 2; i >= 0; i--) {
		dp2[i] = st2[i].codePointAt(0) + dp2[i + 1];
	}
	console.log(dp1, dp2);
	let recursive = function (m, n) {
		if (m == st1.length) {
			return dp2[n];
		}
		if (n == st2.length) {
			return dp1[m];
		}
		let val = 0;
		if (st1[m] === st2[n]) {
			val = recursive(m + 1, n + 1);
		} else {
			val = Math.min(
				st1[m].codePointAt(0) + recursive(m + 1, n),
				st2[n].codePointAt(0) + recursive(m, n + 1),
			);
		}
		return val;
	};
	console.log(recursive(0, 0));
};

let masMemo = function (st1, st2) {
	let dp1 = new Array(st1.length + 1).fill(0);
	let dp2 = new Array(st2.length + 1).fill(0);

	for (let i = dp1.length - 2; i >= 0; i--) {
		dp1[i] = st1[i].codePointAt(0) + dp1[i + 1];
	}
	for (let i = dp2.length - 2; i >= 0; i--) {
		dp2[i] = st2[i].codePointAt(0) + dp2[i + 1];
	}
	console.log(dp1, dp2);
	let dp = Array.from({ length: st1.length }, () => Array(st2.length).fill(-1));
	let recursive = function (m, n) {
		if (m == st1.length) {
			return dp2[n];
		}
		if (n == st2.length) {
			return dp1[m];
		}

		if (dp[m][n] != -1) return dp[m][n];
		let val = 0;
		if (st1[m] === st2[n]) {
			val = recursive(m + 1, n + 1);
		} else {
			val = Math.min(
				st1[m].codePointAt(0) + recursive(m + 1, n),
				st2[n].codePointAt(0) + recursive(m, n + 1),
			);
		}
		dp[m][n] = val;
		return val;
	};
	console.log(recursive(0, 0));
};

let masDp = function (st1, st2) {
	let dp = Array.from({ length: st1.length + 1 }, () =>
		Array(st2.length + 1).fill(0),
	);

	for (let i = dp.length - 1; i >= 0; i--) {
		for (let j = dp[0].length - 1; j >= 0; j--) {
			if (i == dp.length - 1 && j == dp[0].length - 1) {
				dp[i][j] = 0;
			} else if (i == dp.length - 1) {
				dp[i][j] = dp[i][j + 1] + st2[j].codePointAt(0);
			} else if (j == dp[0].length - 1) {
				dp[i][j] = dp[i + 1][j] + st1[i].codePointAt(0);
			} else {
				if (st1[i] === st2[j]) {
					dp[i][j] = dp[i + 1][j + 1];
				} else {
					dp[i][j] = Math.min(
						st1[i].codePointAt(0) + dp[i + 1][j],
						st2[j].codePointAt(0) + dp[i][j + 1],
					);
				}
			}
		}
	}
	console.log(dp);
};

let s1 = "sea";
let s2 = "beat";

// minimumDeleteSum(s1, s2);
masRecursion(s1, s2);
masMemo(s1, s2);
masDp(s1, s2);
