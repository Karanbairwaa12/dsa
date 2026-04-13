let map = {};
var climbStairs = function (n) {
	if (n < 0) return 0;
	if (n === 0) {
		map[n] = 1;
		return 1;
	}
    if(map[n] !== undefined) {
        return map[n]
    }
    console.log("Hello", n)
	if (map[n] === undefined) {
		let f = climbStairs(n - 1);
		let s = climbStairs(n - 2);
		let t = climbStairs(n - 3);
        map[n] = f + s + t;
	}
    return map[n]
};
console.log(climbStairs(10))
