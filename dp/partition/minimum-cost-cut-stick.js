var minCost = function (n, cuts) {
	cuts.sort((a, b) => a - b)
	cuts = [0,...cuts,n]
	console.log(cuts)
	let recursive = function (i,j) {
		// console.log(i,j)
		if(j < i) return 0;
		let val = Infinity;
		for(let k =i;k<=j;k++) {
			let cut = cuts[j+1] - cuts[i-1]
			val = Math.min(val, cut + recursive(i, k -1) + recursive(k+1, j))
		}
		return val;
	};
	console.log(recursive(1, cuts.length -2))
};

var minCostMemo = function (n, cuts) {
	cuts.sort((a, b) => a - b)
	cuts = [0,...cuts,n]
	let dp = Array.from({length: cuts.length}, () => Array(cuts.length).fill(-1))
	console.log(cuts)
	let recursive = function (i,j) {
		// console.log(i,j)
		if(j < i) return 0;
		if(dp[i][j] != -1) return dp[i][j]
		let val = Infinity;
		for(let k =i;k<=j;k++) {
			let cut = cuts[j+1] - cuts[i-1]
			val = Math.min(val, cut + recursive(i, k -1) + recursive(k+1, j))
		}
		dp[i][j] = val;
		return val;
	};
	console.log(recursive(1, cuts.length -2))
};


var minCostTabulation = function (n, cuts) {
	cuts.sort((a, b) => a - b)
	cuts = [0,...cuts,n]
	let dp = Array.from({length: cuts.length}, () => Array(cuts.length).fill(-1))
	console.log(cuts)

	let recursive = function (i,j) {
		// console.log(i,j)
		if(j < i) return 0;
		if(dp[i][j] != -1) return dp[i][j]
		let val = Infinity;
		for(let k =i;k<=j;k++) {
			let cut = cuts[j+1] - cuts[i-1]
			val = Math.min(val, cut + recursive(i, k -1) + recursive(k+1, j))
		}
		dp[i][j] = val;
		return val;
	};
	console.log(recursive(1, cuts.length -2))
};
let n = 7;
let cuts = [3, 5, 4, 1];
minCost(n, cuts)
minCostMemo(n, cuts)
minCostTabulation(n, cuts)
