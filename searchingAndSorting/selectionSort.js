var selectionSort = function (nums) {
    for(let i =0;i<nums.length;i++) {
        let j_min = i;
        for(let j = i + 1;j < nums.length;j++) {
            if(nums[j_min] > nums[j]) {
                j_min = j;
            }
        }

        if(j_min !== i) {
            let temp = nums[i]
            nums[i] = nums[j_min]
            nums[j_min] = temp;
        }
    }

    console.log(nums)
}
let nums = [-1,2,-8,-10]
selectionSort(nums)