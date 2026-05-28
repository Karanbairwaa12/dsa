// var knightTraver = function (n, t, row, col) {
//   let dp = Array.from({ length: n }, () => Array(n).fill(0));
//   let count = 0;
//   let run = function (r, c, k) {
//     console.log(r, c)

//     if(k == t) {
//         dp[r][c] = dp[r][c]+1;
//         return;
//     };
// if (r - 2 >= 0 && c + 1 < n) {
//   run(r - 2, c + 1, k + 1);
// }
// if (r - 1 >= 0 && c + 2 < n) {
//   run(r - 1, c + 2, k + 1);
// }
// if (r + 1 < n && c + 2 < n) {
//   run(r + 1, c + 2, k + 1);
// }
// if (r + 2 < n && c + 1 < n) {
//   run(r + 2, c + 1, k + 1);
// }
// if (r + 2 < n && c - 1 >= 0) {
//   run(r + 2, c - 1, k + 1);
// }
// if (r + 1 < n && c - 2 >= 0) {
//   run(r + 1, c - 2, k + 1);
// }
// if (r - 1 >= 0 && c - 2 >= 0) {
//   run(r - 1, c - 2, k + 1);
// }
// if (r - 2 >= 0 && c - 1 >= 0) {
//   run(r - 2, c - 1, k + 1);
// }
//   };
//   run(row, col, 0);
//   let sum =0;
//   for(let i =0;i<n;i++) {
//     for(let j=0;j<n;j++) {
//         sum = sum + dp[i][j] * 1/Math.pow(8,t)
//     }
//   }
// console.log(count/(Math.pow(8,t)%(Math.pow(10,9) +7)), dp)
//   return  count/(Math.pow(8,t)%(Math.pow(10,9) +7));
// };

var knightTraver = function (n, t, row, col) {
  let dp1 = Array.from({ length: n }, () => Array(n).fill(0));
  let dp2 = Array.from({ length: n }, () => Array(n).fill(0));

  let setDp = function (next, curr, r, c, val) {
    if (r - 2 >= 0 && c + 1 < n) {
      next[r - 2][c + 1] += curr[r][c];
    }
    if (r - 1 >= 0 && c + 2 < n) {
      next[r - 1][c + 2] += curr[r][c];
    }
    if (r + 1 < n && c + 2 < n) {
      next[r + 1][c + 2] += curr[r][c];
    }
    if (r + 2 < n && c + 1 < n) {
      next[r + 2][c + 1]+= curr[r][c];
    }
    if (r + 2 < n && c - 1 >= 0) {
      next[r + 2][c - 1]+= curr[r][c];
    }
    if (r + 1 < n && c - 2 >= 0) {
      next[r + 1][c - 2]+= curr[r][c];
    }
    if (r - 1 >= 0 && c - 2 >= 0) {
      next[r - 1][c - 2]+= curr[r][c];
    }
    if (r - 2 >= 0 && c - 1 >= 0) {
      next[r - 2][c - 1]+= curr[r][c];
    }
  };

  dp1[row][col] = 1;
  let bol = true;
  for (let k = 0; k < t; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (bol) {
          if (dp1[i][j] !== 0) {
            setDp(dp2, dp1, i, j, dp1[i][j]);
            dp1[i][j] = 0;
          }
        } else {
          if (dp2[i][j] !== 0) {
            setDp(dp1, dp2, i, j, dp2[i][j]);
            dp2[i][j] = 0;
          }
        }
      }
    }
    bol = !bol;
  }
  let sum = 0;
  if (bol) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        sum = sum + dp1[i][j];
      }
    }
  } else {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        sum = sum + dp2[i][j];
      }
    }
  }
  console.log(dp1, dp2, bol, sum, sum / Math.pow(8, t));
  return sum / Math.pow(8, t);
};
knightTraver(5, 2, 2, 2);
