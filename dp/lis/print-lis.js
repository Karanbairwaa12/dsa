const printLis = function (arr) {
	let n = arr.length;
	let dp = new Array(n).fill(0);
	dp[0] = 1;
	let maxT = 1;
	const findLis = function (arr) {
		for (let i = 1; i < arr.length; i++) {
			let max = 0;
			for (let j = 0; j < i; j++) {
				if (arr[j] < arr[i]) {
					max = Math.max(max, dp[j]);
				}
			}
			dp[i] = max + 1;
			maxT = Math.max(maxT, dp[i]);
		}
		console.log(maxT, dp);
	};
    findLis(arr)

    let idxMax = -1;
    for(let i =0;i<dp.length;i++) {
        if(dp[i] === maxT) {
            if(idxMax === -1) {
                idxMax = i;
            }else {
                if(arr[idxMax] < arr[i]) {
                    idxMax = i;
                }
            }
        }
    }

        console.log("hii", idxMax, arr)

    let c = idxMax;
    let p = [arr[c]]
    for(let i = idxMax;i>=0;i--) {
        if(arr[c] > arr[i] && dp[i] + 1 === dp[c]) {
            p.push(arr[i]);
            c = i;
        }
    }
    console.log(p);
    
};

printLis([10,9,2,5,3,7,101,18]);
