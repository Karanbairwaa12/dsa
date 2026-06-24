let palPartitionRec = function (s) {
	let dp = Array.from({ length: s.length + 1 }, () =>
		Array(s.length + 1).fill(-1),
	);
	let isPalindrom = function (i, j) {
		while (i < j) {
			if (s[i] != s[j]) {
				return false;
			}
			i++;
			j--;
		}
		return true;
	};

	let recursion = function (i, j) {
		if (i >= j) return 0;
		if (dp[i][j] != -1) return dp[i][j];
		if (isPalindrom(i, j)) {
			return (dp[i][j] = 0);
		}
		let val = Infinity;

		for (let k = i; k < j; k++) {
			val = Math.min(val, 1 + recursion(i, k) + recursion(k + 1, j));
		}
		dp[i][j] = val;
		return val;
	};
	console.log(recursion(0, s.length - 1));
};

let palPartitionRecTabu = function (s) {
	let bol = Array.from({ length: s.length }, () => Array(s.length).fill(false));

	for (let i = 0; i < s.length; i++) {
		bol[i][i] = true;
	}
	for (let i = 0; i < s.length - 1; i++) {
		if (s[i] == s[i + 1]) {
			bol[i][i + 1] = true;
		}
	}
	for(let i =0;i<s.length;i++) {
        for(j = 0,k = i;j<s.length;j++, k++) {
            
        }
    }
    console.log(bol)
};
s = "abccbc";
palPartitionRecTabu(s);
