function reverseString (nums) {
    for(let i=0;i<nums.length/2;i++) {
        let temp = nums[i];
        nums[i] = nums[nums.length -1 -i];
        nums[nums.length -1 -i] = temp;
    }

    console.log(nums)
}
reverseString(["h","e","l","l","o"])