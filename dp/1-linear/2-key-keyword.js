const Run = function (n) {
  let dp = new Array(n + 1).fill(-1);
  const Key2keyword = function (n) {
    if(n === 1) return 0;
    if(dp[n] !== -1) return dp[n]
    let ans = n;
    for (let i = 1; i < n; i++) {
      if (n % i === 0) {
        ans = Math.min(ans, Key2keyword(i) + n/i);
      }
    }
    dp[n] = ans;
    return ans;
  };

  console.log(Key2keyword(n));
    console.log(dp)
};
Run(12);
