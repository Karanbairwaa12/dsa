let s1 = "AXYT";
let s2 = "AYZX";
let m = s1.length;
let n = s2.length;
let memo = Array.from({ length: m+1 }, () => Array(n+1).fill(-1));

const lcs = function (s1, s2, m, n) {
  if (m === 0 || n === 0) {
    return 0;
  }
  let val = 0;
  if (s1[m - 1] === s2[n - 1]) {
    val = 1 + lcs(s1, s2, m - 1, n - 1);
    return val;
  }

  val = Math.max(lcs(s1, s2, m - 1, n), lcs(s1, s2, m, n - 1));
  return val;
}

const lcsMemo = function (s1, s2, m, n, dp) {
  if (m === 0 || n === 0) {
    return 0;
  }
  if (dp[m][n] !== -1) return dp[m][n];
  let val = 0;
  if (s1[m - 1] === s2[n - 1]) {
    val = 1 + lcs(s1, s2, m - 1, n - 1, dp);
    dp[m][n] = val;
    return val;
  }

  val = Math.max(lcs(s1, s2, m - 1, n, dp), lcs(s1, s2, m, n - 1, dp));
  dp[m][n] = val;
  return val;
}

const lcsTabulation = function (s1, s2, m, n) {
    let dp = Array.from({length: m+1}, () => Array(n +1).fill(0))

    for(let i =1;i<dp.length;i++) {
        for(let j =1;j<dp[0].length;j++) {
            if(s1[i-1] === s2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1]
            }else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }   
    }
    return dp[m][n]
}

const lcsTabulationSpaceOptimization2D = function (s1, s2, m, n) {
    let dp = Array.from({length: 2}, () => Array(n+1).fill(0))

    for(let i =1;i<=s1.length;i++) {
        for(let j =1;j<dp[0].length;j++) {
            if(s1[i-1] === s2[j-1]) {
                dp[1][j] = 1 + dp[0][j-1]
            }else {
                dp[1][j] = Math.max(dp[0][j], dp[1][j-1])
            }
        }
        dp[0] = [...dp[1]]   
    }
    return dp[1][n]
}

const lcsTabulationSpaceOptimization1D = function (s1, s2, m, n) {
    let dp = new Array(n+1).fill(0)
    let prev = 0;
    
    for(let i =1;i<=m;i++) {
        let prev = dp[0]
        for(let j =1;j<=n;j++) {
            let temp = dp[j]
            if(s1[i-1] === s2[j-1]) {
                dp[j] = prev + 1;
            }else {
                dp[j] = Math.max(dp[j-1], dp[j])             
            }
            prev = temp;
        }
    }
    return dp[n]
}



console.log(lcs(s1, s2, m, n, memo));
console.log(lcsTabulation(s1,s2,m,n))
console.log(lcsTabulationSpaceOptimization2D(s1,s2,m,n))
console.log(lcsTabulationSpaceOptimization1D(s1,s2,m,n))
