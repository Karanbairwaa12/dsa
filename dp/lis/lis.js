const findLis = function(arr) {
    let n = arr.length;
    let dp = new Array(n).fill(0);
    dp[0] = 1;
    let maxT = 1;
    for(let i =1;i<arr.length;i++) {
        let max = 0;
        for(let j =0;j<i;j++) {
            if(arr[j] < arr[i]) {
                max = Math.max(max, dp[j])
            }
        }
        dp[i] = max +1;
        maxT = Math.max(maxT, dp[i])
    }
    console.log(maxT,dp)
    return maxT
}

findLis([10,9,2,5,3,7,101,18])