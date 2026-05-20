var countSquares = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let dp = Array.from({length: m}, () => Array(n).fill(0));
    let sum = 0;
    for(let i =m-1;i>=0;i--) {
        for(let j = n-1;j>=0;j--) {
            if(i === m-1 || j === n-1) {
                dp[i][j] = matrix[i][j]
            }else {
                dp[i][j] = Math.min(dp[i+1][j], dp[i][j+1], dp[i+1][j+1]) +1;
            }
            sum += dp[i][j]
        }
    }
    console.log(sum, dp)
    return sum
};

countSquares([
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
])