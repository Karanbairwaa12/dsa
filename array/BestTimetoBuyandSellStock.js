var maxProfit = function(nums) {
    let min = nums[0]
    let profit = 0;
    for(let i =0;i<nums.length;i++) {
        min = Math.min(nums[i], min)
        profit = Math.max(profit, nums[i] -min)
    }

    console.log(profit, min)
};

maxProfit([7,1,5,3,6,4])