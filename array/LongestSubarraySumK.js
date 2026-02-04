var longestSubarray = function (nums, k) {
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
    for(let i =0;i<nums.length;i++) {
        let max  =0;
        for(let j =i;j<nums.length;j++) {
            max = max + nums[j]
            if(max === k) {
                len = Math.max(len, j -i +1)
            }else if (max > k) {
                break;
            }
        }
    }
    console.log(len)
}

let nums = [3, 2, 1]
let k = 6

longestSubarray(nums, k)