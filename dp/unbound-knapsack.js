function KnapSake(weight, values, capacity) {
    let dp = Array.from({length: weight.length}, () => Array(capacity +1).fill(0));

    for(let i =0;i<dp.length;i++) {
        for(let j = weight[i];j < dp[0].length;j++) {
            if(i === 0) {
                dp[i][j] = dp[i][j-weight[i]] + values[i]
            }else if(dp[i-1][j] > values[i] + Math.max(dp[i][j-weight[i]], dp[i-1][j-weight[i]])) {
                dp[i][j] = dp[i-1][j]
            }else {
                dp[i][j] = values[i] + Math.max(dp[i][j-weight[i]], dp[i-1][j-weight[i]])
            }
        }
    }
    console.log(dp)
}
KnapSake([2,5,1,3,4],[15,14,10,45,30],7)