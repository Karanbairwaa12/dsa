let arr = [10, 9, 2, 5, 3, 7, 101, 18];
let n = arr.length;
let dp = new Array(n).fill(0);
dp[0] = 1;
let maxT = 1;

var lengthOfLIS = function () {
  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        max = Math.max(max, dp[j]);
      }
    }
    dp[i] = max + 1;
    maxT = Math.max(maxT, dp[i]);
  }
  // console.log(maxT,dp)
};

var printLIS = function () {
  let idx = -1;
  for (let i = 0; i < arr.length; i++) {
    if (dp[i] === maxT) {
      idx = i;
      break;
    }
  }

  let lis = [arr[idx]];
  let i = idx;
  let j = 0;
  while (i > j) {
    while (j < i) {
      if (dp[j] === dp[i] - 1 && arr[j] < arr[i]) {
        lis.push(arr[j]);
        i = j;
        j =0;
        break;
      }
      j++;
    }
  }
  console.log(lis.reverse());
};

lengthOfLIS();
printLIS();
