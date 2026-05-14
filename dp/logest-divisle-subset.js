let nums = [5,9,18,54,108,540,90,180,360,720]


const Longestdivisel = function (nums) {
    let n = nums.length;
    let dp = new Array(n).fill(0);
    dp[0] = 1;
    let maxT = 1;
    for (let i = 1; i < n; i++) { 
        let max = 0;
        for (let j = 0; j < i; j++) {

            if (nums[i] % nums[j]===0 || nums[j] % nums[i]=== 0) {
                max = Math.max(max, dp[j])
            }
        }
        dp[i] = max + 1;
        maxT = Math.max(maxT, dp[i])
    }
    console.log(dp, maxT)

    const printLongesString = function (id) {
        let i = id;
        let s = [nums[id]]

        while (i > 0) {
            let maxId = -1;
            let max = 0;
            for (let j = i - 1; j >= 0; j--) {
                if ((nums[i] % nums[j] === 0 || nums[j] % nums[i] === 0) && dp[j] === dp[i] - 1) {
                    max = dp[j];
                    maxId = j;
                }
            }
            if (maxId !== -1) {
                s.push(nums[maxId])
            }

            i = maxId;
        }
        console.log(s, dp)
        return s;
    }
    for (let i = n - 1; i >= 0; i--) {
        if (dp[i] === maxT) {
            return printLongesString(i)
        }
    }
}

Longestdivisel(nums)