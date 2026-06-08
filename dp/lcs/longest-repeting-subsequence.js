let lrs = function (s, k) {
    let dp = {}
	let recursive = function (path, i) {
        if(i == s.length) {
            if(dp[path] !== undefined) {
                dp[path]++;
            }else {
                dp[path] = 1;
            }
            // console.log(path)
            return;
        }
		
		recursive(path + s[i], i+1)
        recursive(path, i+1)
	};
	recursive("", 0);
    // console.log(dp)
    // let res = ""
    for(let [key, value] of Object.entries(dp)) {
        if(value == k) {
            return key
        }
    }
    return ""
};

let str = "abb";
console.log(lrs(str, 2));
