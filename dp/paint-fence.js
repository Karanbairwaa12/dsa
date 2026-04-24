let paintFence = function(n, k) {
    let dp = Array.from({length: 2}, () => Array(n+1).fill(0))

    dp[0][2] = k;
    dp[1][2] = k*(k-1);
    let val = 0;
    for(let i = 3;i<=n;i++) {
        dp[0][i] = dp[1][i-1];
        dp[1][i] = 2*(dp[0][i-1] + dp[1][i-1])
        val = dp[0][i] + dp[1][i]
    }

    console.log(val, dp)
}

paintFence(3, 4);