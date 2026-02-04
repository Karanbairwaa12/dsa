let val = "1000000" //1,000,000.00

let floatVal = Number(val).toFixed(2)


console.log(Number(val).toFixed(2))
let str = ""
for(let i = 0;i<val.length;i++) {
    str = val[val.length -1 -i] + str
    if((i+1) % 3 === 0) {
        str = "," + str
    }
}
let str_remove = ""

for(let i =0;i<str.length;i++) {
    if(str[i] !== ",") {
        str_remove = str_remove + str[i]
    }
}

console.log(str, str_remove)