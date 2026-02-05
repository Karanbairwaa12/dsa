var bubbleSort = function(nums) {
    let sorted = false;
    while(!sorted) {
        sorted = true;
        for(let i =0;i<nums.length -1;i++) {
            if(nums[i] > nums[i+1]) {
                let temp = nums[i];
                nums[i] = nums[i+1]
                nums[i+1] = temp;
                sorted = false;
            }
        }
    }

    console.log(nums)
}

bubbleSort([8,3,5,1,4,2])