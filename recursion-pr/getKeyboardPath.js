let keys = ["?","abc", "def", "ghi", "jkl", "mnop", "qrst", "uv", "wxyz", ".;"]

let printKeyboard = function(str, path) {
    // console.log(str, path)
    if(str.length === 0) {
        console.log(path)
        return;
    }

    let ch = str[0];
    let ros = str.slice(1)

    let charNum = Number(ch)
    for(let i =0;i<keys[charNum].length;i++) {
        printKeyboard(ros, keys[charNum][i] + path)
    }
}

printKeyboard("567", "")
