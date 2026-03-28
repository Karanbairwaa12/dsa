let printAbbreviation = function (s) {
    let printSub = function(str, path, count) {
        if(str.length === 0) {
            if(count !== 0) {
                 console.log(path + count)
            }else {
                console.log(path)
            }
           
            return;
        }
        let ch = str[0];
        let ros = str.slice(1);
        if(count !== 0) {
            printSub(ros,  path + count + ch, 0)
        }else {
            printSub(ros, path + ch, 0)
        }
        
        printSub(ros, path, count + 1)
    }

    printSub(s, "", 0)
}

printAbbreviation("pep")