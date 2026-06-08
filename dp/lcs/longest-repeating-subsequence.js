let longestReapitingSubsequence = function(s1, s2) {
    let dp = Array.from({length: s1.length+1}, ()=> Array(s2.length+1).fill(-1))
    let run = function(s1, s2, m, n) {
        if(m=== 0 || n=== 0 || m === n) return 0;

        if(dp[m][n] !== -1) return dp[m][n]
        let val = 0;
        if(s1[m-1] == s2[n-1]) {
            val = 1+ run(s1, s2, m-1, n-1)
        }else {
            val = Math.max(run(s1, s2, m-1, n), run(s1, s2, m, n-1))
        }
        dp[m][n] = val;
        return val;
    }
    return Math.max(run(s1, s2, s1.length -1, s2.length), run(s1, s2, s1.length, s2.length -1))
}
let s1 = "AABEBCDD";
let s2 = "AABEBCDD";
console.log(longestReapitingSubsequence(s1, s2))