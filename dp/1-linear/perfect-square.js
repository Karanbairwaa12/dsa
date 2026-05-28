const Run = function (n) {
  let dp = new Array(n + 1).fill(-1);
  const perfectSquare = function (n) {
    if (n < 1) return 0;

    if (dp[n] !== -1) {
      return dp[n];
    }
    let ans = Infinity;

    for (let i = 1; i * i <= n; i++) {
      ans = Math.min(ans, 1 + perfectSquare(n - i * i));
    }

    dp[n] = ans;
    return ans;
  };
  console.log(perfectSquare(12));
};
Run(12)
