var binarySearch = function(nums, target) {
    let i =0;
    let j = nums.length -1;
    let is_ascending = nums[i] < nums[j]

    while(i <= j && i < nums.length && j >= 0) {
        let mid = Math.floor((j + i)/2)
        
        // if(nums[mid] === target) {
        //     return mid
        // }else if(nums[mid] < target) {
        //     i = mid +1;
        // }else {
        //     j = mid - 1;
        // }

        if(nums[mid] === target){
            console.log(mid)
            return mid
        }

        if(is_ascending) {
            if(nums[mid] < target) {
                i = mid +1;
            }else {
                j = mid -1;
            }
        }else {
            if(nums[mid] < target) {
                j = mid -1;
            }else {
                i = mid +1;
            }
        }
    }
    console.log(mid)
}

binarySearch([99, 67, 45, 32, 19, 15, 12, 8, 7, 6, 4, 2, -1], 67)