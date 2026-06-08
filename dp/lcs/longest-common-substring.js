let longestCommonSubstring = function(s1, s2) {
    let m = s1.length;
    let n = s2.length;

    let getSuffix = function(m, n, s1, s2) {
        if(m === 0 || n === 0 || s1[m-1] != s2[n-1]) return 0;
        return 1 + getSuffix(m-1, n-1, s1, s2)
    }
    let dp = Array.from({length: m+1}, () => Array(n+1).fill(0))
    let max = 0;
    for(let i = 1;i<m;i++) {
        for(let j =1;j<n;j++) {
            if(s1[i-1] === s2[j-1]) {
                dp[i][j] = getSuffix(i,j, s1, s2)
                max = Math.max(max, dp[i][j])
            }
        }
    }
    return max;
}
let s1 = "GeeksforGeeks";
let s2 = "GeeksQuiz";
console.log(longestCommonSubstring(s1, s2))