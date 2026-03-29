
const getSubSequence = function (str) {
    if (str.length === 0) {
        return [""];
    }
    let result = []
    let ch = str[0];
    let newStr = str.slice(1);
    let arr = getSubSequence(newStr)
    for (let val of arr) {
        result.push(val),
        result.push(ch + val)
    }

    return result;
}

console.log(getSubSequence("abc"))