function scs(s1, s2, m, n) {
	if (m == 0) return s2.substring(0,n);
	if (n == 0) return s1.substring(0,m);
	if (s1[m - 1] === s2[n - 1]) {
		return scs(s1, s2, m - 1, n - 1) + s1[m - 1];
	}

	let scs1 = scs(s1, s2, m - 1, n);
	let scs2 = scs(s1, s2, m, n - 1);
	if (scs1.length < scs2.length) {
		return scs1 + s1[m-1];
	} else {
		return scs2 + s2[n-1];
	}
}

function scsMemo(s1, s2, m, n) {
	if (m == 0) return s2.substring(0,n);
	if (n == 0) return s1.substring(0,m);

    if(dp[m-1][n-1] !== "") return dp[m-1][n-1]
	if (s1[m - 1] === s2[n - 1]) {
		return scsMemo(s1, s2, m - 1, n - 1) + s1[m - 1];
	}

	let scs1 = scsMemo(s1, s2, m - 1, n);
	let scs2 = scsMemo(s1, s2, m, n - 1);
	if (scs1.length < scs2.length) {
		dp[m-1][n-1] = scs1 + s1[m-1];
	} else {
		dp[m-1][n-1] = scs2 + s2[n-1];
	}

    return dp[m-1][n-1]
}


let str1 = "abac";
let str2 = "cab";
let dp = Array.from({length: str1.length}, () => Array(str2.length).fill(""))
console.log(scs(str1, str2, str1.length, str2.length));
console.log(scsMemo(str1, str2, str1.length, str2.length));
