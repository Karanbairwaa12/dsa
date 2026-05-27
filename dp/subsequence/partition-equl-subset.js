const partition = function (arr) {
  // code here

  let sum = 0;
  arr.forEach((item) => {
    sum = sum + item
  })
  if(sum%2 !== 0) {
    return false;
  }else {
    sum = sum/2;
  }

  let dp= Array.from({length: arr.length +1}, () => Array(sum +1).fill(0));

  dp[0][0] = 1;
  for(let i =1;i<dp.length;i++) {
    for(let j =0;j<dp[0].length;j++) {
        if(j == arr[i-1]) {
            dp[i][j] = 1;
        }else {
            if(dp[i-1][j] == 1) {
                dp[i][j] = 1;
            }else if( j - arr[i-1] >= 0) {
                if(dp[i-1][j-arr[i-1]] ==1) {
                    dp[i][j] = 1;
                }
            }
        }
        
    }
  }
  if(dp[dp.length-1][sum])
  console.log(dp,dp[dp.length-1][sum])
}; 
partition([1,5,11,5])