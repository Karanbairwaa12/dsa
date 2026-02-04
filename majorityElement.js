module.exports = function majorityElement(nums) {
  // console.log(nums)
  //   let majority = 0;
  //   let res = 0;

  //   const map = new Map();
  //   for (let i = 0; i < nums.length; i++) {
  //     if (map.has(nums[i])) {
  //       map.set(nums[i], map.get(nums[i]) + 1);
  //     } else {
  //       map.set(nums[i], 1);
  //     }

  //     if (map.get(nums[i]) > majority) {
  //       majority = map.get(nums[i]);
  //       res = nums[i];
  //     }
  //   }

  //   console.log(majority, res)

  let m = 0;
  let c = 0;
  for(let i =0;i<nums.length;i++) {
    if(c === 0) {
        m = nums[i]
    }
    if(m === nums[i]) {
        c += 1
    }else {
        c-=1
    }
  }

  console.log(m, c);
};
