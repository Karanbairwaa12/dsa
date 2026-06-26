var maxCoins = function (nums) {
    let dp = {}
    let recursion = function (arr) {
        if(arr.length === 0) return 0;
        let key = arr.join("");
        if(dp[key] != undefined) return dp[key]
        let max =0;
        for(let k =0;k<arr.length;k++) {
            let left = k === 0 ? 1:arr[k-1]
            let right = k === arr.length -1 ? 1 : arr[k+1]

            let coins = left * arr[k] * right;
            let reminder = [...arr.slice(0, k), ...arr.slice(k+1)]

            max = Math.max(max, coins + recursion(reminder))
        }

        dp[key] = max;
        return max;
    };
    
    return recursion(nums);
};

var maxCoins2 = function (nums) {
    nums = [1, ...nums, 1]
    let recursion = function (left, right) {
        if(left +1 === right) return 0;
        
        let max =0;
        for(let k =left +1;k<right;k++) {
            let l = nums[left]
            let r = nums[right]
            let coins = l * nums[k] * r;
            max = Math.max(max, coins + recursion(left, k) + recursion(k, right))
        }

        return max;
    };
    
    return recursion(0, nums.length -1);
};

var maxCoinsMemo = function (nums) {

    nums = [1, ...nums, 1]

    let dp = Array.from({length: nums.length+1}, ()=> Array(nums.length+1).fill(-1))
    let recursion = function (left, right) {
        if(left +1 === right) return 0;
        if(dp[left][right] != -1) return dp[left][right]
        let max =0;
        for(let k =left +1;k<right;k++) {
            let l = nums[left]
            let r = nums[right]
            let coins = l * nums[k] * r;
            max = Math.max(max, coins + recursion(left, k) + recursion(k, right))
        }
        dp[left][right] = max;
        return max;
    };
    
    return recursion(0, nums.length -1);
};


var maxCoinsTabu = function (nums) {

    nums = [1, ...nums, 1]

    let dp = Array.from({length: nums.length+1}, ()=> Array(nums.length+1).fill(-1))
    // let recursion = function (left, right) {
    //     if(left +1 === right) return 0;
    //     if(dp[left][right] != -1) return dp[left][right]
    //     let max =0;
    //     for(let k =left +1;k<right;k++) {
    //         let l = nums[left]
    //         let r = nums[right]
    //         let coins = l * nums[k] * r;
    //         max = Math.max(max, coins + recursion(left, k) + recursion(k, right))
    //     }
    //     dp[left][right] = max;
    //     return max;
    // };
    
    
    return recursion(0, nums.length -1);
};
console.log(maxCoinsMemo([3, 1, 5, 8])); // Should now give 167