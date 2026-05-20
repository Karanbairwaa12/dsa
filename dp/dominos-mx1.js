let dominosSqure = function(n) {
    let dp = new Array(n+1).fill(0)
    for(let i =1;i<dp.length;i++) {
        if(i < m) {
            dp[i] = 1;
        }else if(i === m) {
            dp[i] = 2;
        }else {
            dp[i] = dp[i -1] + dp[i -m];
        }
    }
    return dp[dp.length -1]
}


console.log(dominosSqure(3))