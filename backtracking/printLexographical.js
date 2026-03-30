let printLexicographical = function(num) {
    let res = ""
    let print = function(i, n) {
        if(i > n) {
            return;
        }
        res = res + i + ", "
        for(let j = 0;j <= 9;j++) {
            let res = "" + i + j;
            print(Number(res), n)
        }
    }
    for(let i =1;i<=9;i++) {
        print(i, num)
    }
    console.log(res)
    
}

printLexicographical(1000)