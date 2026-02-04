var longestSubarrayNegatives = function (nums, k) {
    // let i = 0;
    // let j = 0;
    // let max = 0;
    // let len = 0;
    // while (i < nums.length && j < nums.length) {
    //     max = max + nums[j];
    //     if (max === k) {
    //         len = Math.max(len, j - i + 1)
    //     } else if (max > k) {
    //         while (max > k) {
    //             max = max - nums[i]
    //             i++;
    //         }
    //     }
    //     j++;
    // }
    // if (max === k) {
    //     len = Math.max(len, j - i)
    // }
    // console.log(len)
    // return len
    let len  =0;
    let max  =0;
    let i = 0;
    let j =0;
    for(i =0;i<nums.length;i++) {
        max = 0
        for(j =i;j<nums.length;j++) {
            max = max + nums[j]
            if(max === k) {
                len = Math.max(len, j -i +1)
            }
        }
    }

    if(max === k) {
        console.log(max)
        len = Math.max(len, j -i)
    }
    console.log(len)
}

let nums = [-1,1,1]
let k =1

longestSubarrayNegatives(nums, k)