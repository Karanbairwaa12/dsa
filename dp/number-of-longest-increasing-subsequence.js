class Pair {
    constructor(l, i, v, psf) {
        this.l = l;
        this.i = i;
        this.v = v
    }
}

const NumberOfLongestIncreasingSubsequence = function (nums) {

    let dp = new Array(nums.length).fill(1);

    let maxVal = 1;

    // LIS DP
    for (let i = 1; i < nums.length; i++) {

        let max = 0;

        for (let j = 0; j < i; j++) {

            // STRICTLY increasing
            if (nums[i] > nums[j]) {
                max = Math.max(max, dp[j]);
            }   
        }

        dp[i] = max + 1;

        maxVal = Math.max(maxVal, dp[i]);
    }

    let qu = [];


    // PUSH ALL ENDING INDICES
    for (let i = 0; i < nums.length; i++) {
        if (dp[i] === maxVal) {
            qu.push(new Pair(dp[i], i, nums[i]));
        }
    }

    let count = 0;

    while (qu.length > 0) {

        const rem = qu.shift()
        if (rem.l === 1) {
            count++;
        }

        for (let j = 0; j < rem.i; j++) {

            // STRICTLY increasing + valid parent
            if (
                nums[j] < nums[rem.i] &&
                dp[j] + 1 === dp[rem.i]
            ) {

                qu.push(
                    new Pair(
                        rem.l - 1,
                        j,
                        nums[j]
                    )
                );
            }
        }
    }
    return count;
};

let nums = [0, 2, 1, 4, 3, 6, 5, 8, 7, 10, 9, 12, 11, 14, 13, 16, 15, 18, 17, 20, 19, 22, 21, 24, 23, 26, 25, 28, 27, 30, 29, 32, 31, 34, 33, 36, 35, 38, 37, 40, 39, 42, 41, 44, 43, 46, 45, 48, 47, 50, 49, 52, 51, 54, 53, 56, 55, 58, 57, 60, 59, 61];

NumberOfLongestIncreasingSubsequence(nums);