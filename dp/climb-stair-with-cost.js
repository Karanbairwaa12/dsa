var climbStairs = function(n, costs) {
    let map = {}
    let recursion = function(i) {
        if(i < 0) {
            return 100000
        }
        if(i === 0) {
            return 0;
        }
        if(map[i] !== undefined) {
            return map[i]
        }
        if(map[i] === undefined) {
            let f = recursion(i-1) + costs[i-1] + Math.pow(i - (i -1), 2);
            let s = recursion(i-2)  + costs[i-1] + Math.pow(i - (i -2), 2);
            let t = recursion(i -3) + costs[i-1] + Math.pow(i - (i -3), 2);
            map[i] = Math.min(f,s,t)
        }
        
        return map[i]
    }

    recursion(n)
    console.log(map)
};
climbStairs(3,[9,8,3])