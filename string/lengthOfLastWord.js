var lengthOfLastWord = function(s) {
    console.log(s.trim())
    let res = ""
    let i = 0;
    for(i = s.length -1;i>=0;i--){
        if(s[i] !== " ") {
            break;
        }
    }
    for(let j = i;j>=0;j--) {
        if(s[j] !== " ") {
            res = res+ s[j]
        }else {
            break;
        }
    }

    return res;

};

lengthOfLastWord("my name is karan")