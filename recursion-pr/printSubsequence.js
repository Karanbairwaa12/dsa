let printSubsequence = function(str) {
    let recursive = function(s, path) {
        if(s.length === 0) {
            console.log(path);
            return;
        }
        let ch = s[0];
        let ros = s.slice(1);
        recursive(ros, path);
        recursive(ros, path + ch)
    }
    recursive(str, "")
}

printSubsequence("abc")