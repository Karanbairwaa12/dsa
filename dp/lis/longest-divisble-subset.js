var largestDivisibleSubset = function (nums) {
    nums.sort((a,b) => a -b)
	let n = nums.length;
	let dp = new Array(n).fill(1);
    let parent = new Array(n).fill(-1)
	let maxVal = 1;
	let maxIdx = 0;
	for (let i = 1; i < dp.length; i++) {
		let max = 0;
		let idx = -1;
		for (let j = 0; j < i; j++) {
			if (nums[i] % nums[j] === 0) {
				if (dp[j] > max) {
					max = dp[j];
					idx = j;
				}
			}
		}
        dp[i] = max +1;
        parent[i] = idx;

        if(dp[i] > maxVal) {
            maxVal = dp[i];
            maxIdx = i;
        }
	}
	// console.log(dp, parent, maxVal, maxIdx)
    let s = []
    while(maxIdx != -1) {
        s.push(nums[maxIdx]);
        maxIdx = parent[maxIdx]
    }
    return s;

};

largestDivisibleSubset([3, 16, 7, 8, 2, 5, 4, 32, 34]);
