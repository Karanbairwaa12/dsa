module.exports = function maxSubSum(nums) {
    //brut force
    // let max = 0;
    // for(let i =0;i<nums.length;i++) {
    //     let current = 0;
    //     for(let j =i;j<nums.length;j++) {
    //         current = current + nums[j]

            
    //         if(current > max) {
    //             max = current;
    //         }
    //         console.log(nums[i], current, max)
    //     }
    // }

    // console.log(max, "max")

    //kadane algo
    let c = nums[0]
    let m = nums[0];

    for(let i =1;i<nums.length;i++) {
        c = Math.max(nums[i], c + nums[i])
        m = Math.max(m, c)
    }
    console.log(m)
    return m;
}