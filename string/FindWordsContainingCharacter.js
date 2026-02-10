var findWordsContaining = function(words, x) {
    let result = [];
    for(let i =0;i<words.length;i++) {
        let len = words[i].length;
        for(let j =0;j<len;j++) {
            console.log(words[i][j], x, words[i][j] === x)
            if(words[i][j] === x) {
                result.push(i)
                break;
            }
        }
    }
    console.log(result)
    return result;
};

findWordsContaining(["leet","code"], "e")
