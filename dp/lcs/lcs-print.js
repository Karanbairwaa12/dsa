function lcs(s1,s2,m, n) {
	if (m === 0 || n === 0) {
		return "";
	}
    if(dp[m-1][n-1] !== "") return dp[m-1][n-1]
	if (s1[m - 1] === s2[n - 1]) {
		dp[m-1][n-1] = lcs(s1, s2, m - 1, n - 1) + s1[m - 1];
        return dp[m-1][n-1]
	}
	var lcs1 = lcs(s1, s2, m - 1, n);
	var lcs2 = lcs(s1, s2, m, n - 1);   
	if(lcs1.length > lcs2.length) {
        dp[m-1][n-1] = lcs1
    }else {
        dp[m-1][n-1] = lcs2
    }
    return dp[m-1][n-1]
}


var str1 = "AGGTAB";
var str2 = "GXTXAYB";
let dp = Array.from({length: str1.length}, () => Array(str2.length).fill(""))
console.log(lcs(str1, str2, str1.length, str2.length))
