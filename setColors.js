function sortColors(nums) {
  // write your code here
  //   [2, 0, 2, 1, 1, 0];

  console.log(nums, "nums");
  for (let i = 0; i < nums.length; i++) {
    let minValueIdx = i;
    for (let j = i; j < nums.length; j++) {
      if (nums[minValueIdx] >= nums[j]) {
        minValueIdx = j;
      }
    }
    let temp = nums[i];
    nums[i] = nums[minValueIdx];
    nums[minValueIdx] = temp;
  }

}

module.exports = { sortColors };
