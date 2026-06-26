let interLeaving = function (s, t, u) {
	let s1 = s + t;
	let s2 = u;
	let dp = Array.from({ length: s1.length + 1 }, () =>
		Array(s2.length + 1).fill(-1),
	);
	let recursion = function (m, n) {
		if (s1.length <= s2.length) {
			if (n === 0) return 1;
			if (m === 0) return 0;
		} else {
			if (m === 0) return 1;
			if (n === 0) return 0;
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

let writeNoOfSolutions = function (s, t, u) {
	let find = false;
	let recursive = function (i, j, k) {
		if (k === u.length) {
			find = true;
			return;
		}

		if (find) return;

		if (i < s.length && s[i] === u[k]) {
			recursive(i + 1, j, k + 1);
		}

		if (j < t.length && t[j] === u[k]) {
			recursive(i, j + 1, k + 1);
		}
	};
	recursive(0, 0, 0);
	console.log(find);
};
let s = "ab";
let t = "cd";
let u = "cdab";
// interLeaving(s, t, u);
writeNoOfSolutions(s, t, u);
