const isSubsetSum = function (arr, sum) {
  // code here
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
  console.log(dp)
}; 
isSubsetSum([1,2,3,4], 5)
