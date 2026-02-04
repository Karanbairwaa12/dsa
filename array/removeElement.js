var removeElement = function(nums, val) {

    // let x =0;
    // for(let i =0;i<nums.length;i++) {
    //     if(nums[i] !== val) {
    //         nums[x] = nums[i]
    //         x++;
    //     }
    // }
    // return x

    // let st = []
    // for(let i =0;i<nums.length;i++) {
    //     if(nums[i] !== val) {
    //         st.push(nums[i])
    //     }
    // }

    // for(let i =0;i<st.length;i++) {
    //     nums[i] = st[i]
    // }
    // return st.length;

    let st = nums.filter((item) => item !== val)
    for(let i = 0;i<st.length;i++) {
        nums[i] = st[i]
    }
    return st.length;
};


console.log(removeElement([3,2,2,3],2))