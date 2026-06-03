const findSubsequence = function(str) {
    let recursion = function(path, st) {
        if(st === "") {
            return [path];
        }
        let ch = st[0]
        let rem = st.substring(1)
        return [...recursion(path, rem)
        ,...recursion(path + ch, rem)]
    }
    return recursion("", str)
}

const lcs = function(str1, str2) {
    let str1Path = findSubsequence(str1)
    let str2Path = findSubsequence(str2)
    let arr = []
    for(let st1 of str1Path) {
        
        for(let st2 of str2Path) {
            
            if(st1 === st2) {
                arr.push(st1)
            }
        }
    }
}
lcs("abcd", "aecd")