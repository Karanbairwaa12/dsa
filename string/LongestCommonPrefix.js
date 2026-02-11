var longestCommonPrefix = function (nums) {
    // let res = ""
    // let min = Infinity;
    // let minIdx = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i].length < min) {
    //         min = nums[i].length;
    //         minIdx = i
    //     }
    // }
    // res = nums[minIdx]
    // let minWord = res;

    // for(let i =0;i<nums.length;i++) {
    //     if(i === minIdx) {
    //         continue;
    //     }
    //     let word = nums[i]
    //     let x =0;
    //     let y =0;
    //     let k = 0;
    //     while(x<minWord.length) {
    //         if(minWord[x] !== word[y]) {
    //             res = res.slice(0,k)
    //         }
    //         x++;
    //         y++;
    //         k++;
    //     }
    // }
    // console.log(res)

    let word = nums[0];
    let count = 0;
    for(let i =0;i<word.length;i++) {
        for(let j =1;j<nums.length;j++) {
            console.log(nums[j][i] === word[i])
            if(nums[j][i] !== word[i]) {
                console.log(word.slice(0,count),count)
                return word.slice(0,count);
            }
        }
        count++;
    }

    return word;
    
};

longestCommonPrefix(["flower","flow","flight"])