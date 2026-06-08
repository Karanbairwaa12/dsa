let minimumNumberOfDelAndIns = function (s1, s2, m, n) {
    let dp = Array.from({length: m}, () => Array(n).fill(-1))
    console.log()
    let lcs = function(st1, st2, m, n) {
        if(m == 0 || n ==0 ) return 0;
        if(dp[m-1][n-1] !== -1) {
            return dp[m-1][n-1]
        }
        if(st1[m-1] === st2[n-1]) {
            dp[m-1][n-1] = 1 + lcs(st1, st2, m-1, n-1)
            
        }else {
            dp[m-1][n-1] = Math.max(lcs(st1, st2, m-1, n), lcs(st1, st2, m, n-1))
        }
        return dp[m-1][n-1]

    }
	let lcsC = lcs(s1, s2, m, n);
    let rem = s2.length - lcsC
    return lcsC + rem
};
let str1 = "heap";
let str2 = "pea";
console.log(minimumNumberOfDelAndIns(str1, str2, str1.length, str2.length))
