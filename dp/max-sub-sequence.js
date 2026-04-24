let nums = [0, 3, 3, 3, 1, -2];
let queries = [
	[4, 0],
	[1, 0],
];

var maximumSumSubsequence = function (nums, queries) {
	queries.sort((a, b) => a[0] - b[0]);
	let max = 0;
	let inc = 0;
	let ex = 0;
	console.log(queries);
	for (let i = 0; i < queries.length; i++) {
		let [pos, x] = queries[i];
		nums[pos] = x;

		let start = i == 0 ? 0 : queries[i - 1][0] + 1;
		let end = pos;
		if (start === 0) {
			inc = nums[0];
			ex = 0;
		}
        
		for (let i = start; i <= end; i++) {
			let incC = ex + nums[i];
			let exC = Math.max(inc, ex);
            // console.log(i, incC, exC, "eeeeeeee")
			inc = incC;
			ex = exC;
		}
		
	}

    console.log(inc, ex, queries[queries.length -1][0] + 1);
	for (let i = queries[queries.length -1][0] +1; i <nums.length; i++) {
		let incC = ex + nums[i];
		let exC = Math.max(inc, ex);

		inc = incC;
		ex = exC;
	}
	console.log(inc, ex, nums);
	return Math.max(inc, ex) % (Math.pow(10, 9) + 7);
};

maximumSumSubsequence(nums, queries);
