let printAbbreviation = function (str) {
    let recursion = function (i, path, count) {
        if (i === str.length) {
            if(count > 0) {
                console.log(path+ count);
            }else {
                console.log(path)
            }
            return; 
        }
        let char = str[i];
        if(count > 0) {
            recursion(i + 1, path + count + char, 0)
        }else {
            recursion(i + 1, path + char, 0)
        }
                
        recursion(i + 1, path, count + 1)
    }
    recursion(0, "", 0)
}

printAbbreviation("pep")