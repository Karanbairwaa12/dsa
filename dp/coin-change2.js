var change = function(coins,amount) {
    let dp = new Array(amount+1).fill(0)
    console.log(dp)
    for(let i =0;i<coins.length;i++) {
        for(let j = coins[i];j<dp.length;j++) {
            if(j - coins[i] === 0) {
                dp[j] = dp[j] + 1;
            }else if(dp[j - coins[i]] !== 0) {
                dp[j] = dp[j] + dp[j - coins[i]];
            }
        }
    }
    console.log(dp)
};

change([2], 0)