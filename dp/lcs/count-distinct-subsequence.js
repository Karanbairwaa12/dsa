let cds = function (st) {
	let set = new Set();
	let run = function (i, path, set) {
		if (i === st.length) {
			set.add(path);
            return;
		}
		let ch = s[i];

        run(i+1, path, set)
        run(i+1, path + ch, set)
        
	};
    
	run(0, "", set);
    console.log(set)
};

let cdsMemo = function(s) {
	let memo = {}
	let dp = new Array(s.length +1).fill(0)
	dp[0] = 1;
	for(let i =1;i<dp.length;i++) {
		let val = dp[i-1] * 2;
		if(memo[s[i-1]] != undefined) {
			val = val - dp[memo[s[i-1]] -1]
		}
		dp[i] = val;
		memo[s[i-1]] = i;
	}
	console.log(dp)
}
let s = "abcb";
cds(s);
cdsMemo(s);
