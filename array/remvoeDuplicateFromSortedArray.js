var removeDuplicates = function(nums) {
    let x = 0;
    for(let i =0;i<nums.length;i++) {
        if(nums[i] != nums[x]) {
            x++;
            nums[x] = nums[i]
        }

        
    }
    console.log(nums, x+1)
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])  