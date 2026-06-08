
const lps = function(s, l, r, dp) {
    if(l > r) return 0;
    if(l === r) return 1;

    if(dp[l][r] !== -1) return dp[l][r]
    let val =0;
    if(s[l] === s[r]) {
        val = lps(s, l+1, r-1, dp) + 2
        dp[l][r] = val;
        return val;
    }

    val = Math.max(lps(s, l+1, r, dp), lps(s, l, r-1, dp))
    dp[l][r] = val;
    return val;
}

let s = "bbabcbcab"
let left = 0;
let right = s.length -1;
let dp = Array.from({length: s.length}, () => Array(s.length).fill(-1))
console.log(lps(s, left, right, dp))