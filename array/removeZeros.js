var removeZerosElement = function(nums) {
    
    let x = 0;
    for(let i = 0;i<nums.length;i++) {
        debugger
        if(nums[i] !== 0) {
                let temp = nums[i];
                nums[i] = nums[x]
                nums[x] = temp;
                let j = x + 1;
                while(j <= i) {
                    if(nums[j] === 0) {
                        x = j;
                        break;
                    }
                    j++;
                }
        }
    }

    console.log(nums)
};

removeZerosElement([1,2,3,4,5,6,7]) 