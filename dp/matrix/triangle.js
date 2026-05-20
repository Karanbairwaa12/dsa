var minimumTotal = function(nums) {
    // let idx = 0;
    // let sum = triangle[0][0];
    // let i = 1;
    //         // console.log(sum)
    // while(i < triangle.length) {
    //     // console.log(triangle[idx], triangle[idx +1])
    //     if(triangle[i][idx] < triangle[i][idx + 1]) {
    //         sum = sum + triangle[i][idx]
    //         idx = idx;
    //     }else {
    //         sum = sum + triangle[i][idx + 1]
    //         idx = idx + 1;
    //     }
    //     // console.log(sum)
    //     i++;
    // }
    // // console.log(sum)
    // return sum
    let prev = nums[0];
    for(let i =1;i<nums.length;i++) {
        let curr = new Array(prev.length +1).fill(Infinity)
        console.log(curr)
        for(let j = 0;j<prev.length;j++) {
            for(let k = j;k<=j+1 && k<curr.length;k++) {
                curr[k] = Math.min(curr[k],nums[i][k] + prev[j])
            }
        }
        console.log(curr)
        prev = [...curr]
    }
    return Math.min(...prev)
    // console.log(prev)
};
minimumTotal([[-1],[2,3],[1,-1,-3]])