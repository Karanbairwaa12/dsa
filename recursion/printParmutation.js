let printPermutation = function(str, path) {
    if(!str) {
        console.log(path);
        return;
    }
    for(let i =0;i<str.length;i++) {
        let char = str[i];
        let left = str.substring(0, i);
        let right = str.substring(i+1)
        let result = left + right;
        // console.log(console.log(char, remain))
        printPermutation(result, path + char)
    }
}

printPermutation("abc", "")