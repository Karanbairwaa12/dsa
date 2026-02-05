var insertionSort = function (nums) {
    if(nums.length <=1) {
        return nums
    }
    for(let i =1;i<nums.length;i++) {
        let k = i;
        while(nums[k] < nums[k -1] && k > 0) {
            let temp = nums[k];
            nums[k] = nums[k -1]
            nums[k -1] = temp
            k--;
        }
    }

    console.log(nums)

    // start from 1, swap the element backward till the current element is smaller then previous one, and then do this for each element
}   

insertionSort([8,3,5,1,4,2])