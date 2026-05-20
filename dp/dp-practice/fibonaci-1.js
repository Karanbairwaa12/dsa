// 0 1 1 2 3 5 
const fibonaciiRecursion = function (n) {
    if (n <= 0) {
        return 0;
    }
    if (n === 1) {
        return n;
    }
    return fibonaciiRecursion(n - 1) + fibonaciiRecursion(n - 2)
}

const withMemoization = function (n, dp = {}) {
    if (n <= 1) {
        return n;
    }

    if (dp[n] !== undefined) {
        dp[n];
    }
    dp[n] = withMemoization(n - 1, dp) + withMemoization(n - 2, dp)
    return dp[n]
}

const withTabulation = function (n) {
    let dp = new Array(n + 1).fill(0)
    dp[1] = 1;
    for (let i = 2; i < dp.length; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}

const spaceOptimization = function (n) {
    if (n <= 1) return n;
    let prev2 = 0;
    let prev1 = 1;

    for(let i = 2;i<=n;i++){
        let curr = prev1 + prev2;

        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;

}
console.log(fibonaciiRecursion(5))
console.log(withoutTabulation(5))