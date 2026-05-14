let LongestBiotonicSubsequence = function (nums) {
    let dp = Array.from({length: 2}, () => Array(nums.length).fill(0));

    dp[0][0] = 1;
    for(let i = 1;i<nums.length;i++) {
        let max = 0;
        for(let j = 0;j<i;j++) {
            if(nums[i] > nums[j]) {
                max = Math.max(max, dp[0][j])
            }
        }
        dp[0][i] = max + 1;
    }

    dp[1][dp[0].length -1] = 1;
    for(let i = dp[0].length -2;i>=0;i--) {
        let max = 0;
        for(let j = i+1;j<dp[0].length;j++) {
            if(nums[j] < nums[i]) {
                max = Math.max(max, dp[1][j])
            }
        }
        dp[1][i] = max + 1;
    }
    let max = 0;
    for(let i =0;i<dp[0].length;i++) {
        max = Math.max(max, dp[0][i] + dp[1][i])
    }
    console.log(max)
    return max;
}
let nums = [10, 22, 9, 33, 21, 50, 41, 60, 80, 3]
LongestBiotonicSubsequence(nums)