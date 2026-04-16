class Solution {
	isSubsetSum(arr, target) {
		// // code here
		// let isV = false;
		// function recursive(i, sum) {
		// 	if (sum === target) {
		// 		isV = true;
		// 		return;
		// 	}

		// 	if (i === arr.length) {
		// 		return;
		// 	}
		// 	if (!isV) {
		// 		// console.log(i, sum);
		// 		recursive(i + 1, sum + arr[i]);
		// 		// console.log(i, sum, "post");
		// 		recursive(i + 1, sum);
		// 	}
		// }
		// // console.log(isV)
		// recursive(0, 0);
		// return isV;

        let dp = Array.from({length:arr.length +1}, () => Array(target+1).fill(0));

        // let sum =0;
        for(let i =0;i<dp.length;i++) {
            for(let j =0;j<dp[0].length;j++) {
                if(j === 0){
                    dp[i][j] = 1;
                    continue;
                }
                if(i === 0) {
                    // dp[i][j] = 0;
                    continue;
                }
                // console.log(j - arr[i-1], dp[i][j - arr[i-1]], i,j)
                if(arr[i-1] > j) {
                    if(dp[i-1][j] === 1) {
                        dp[i][j] =1;
                    }
                    continue;
                }
                if(dp[i-1][j] === 1 || dp[i-1][j - arr[i-1]] === 1) {
                    dp[i][j] =1;
                }
            }
        }
        console.log(dp)
	}
}
let obj = new Solution();

let arr = [3,34,4,12,5,2];
let target = 9;

let result = obj.isSubsetSum(arr, target);

console.log(result);
