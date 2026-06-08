var generateValidStrings = function(n, k) {
    let res = []
    let recursive = function(path, i, sum) {
        if(sum > k) return;
        if(path.length === n) {
            res.push(path)
            return;
        }
        if(i === 0 || path[i-1] !== "1") {
            recursive(path + "1", i+1, sum + i)
        }
        recursive(path + "0", i+1, sum)
    }
    recursive("", 0, 0)
    console.log(res)
};
generateValidStrings(1,0)
